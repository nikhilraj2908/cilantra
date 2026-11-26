const express = require("express");
const slugify = require("slugify");
const Story = require("../models/Story");
const protect = require("../middleware/auth");
const { adminOnly } = require("../middleware/auth");

const router = express.Router();

function makeSlug(title) {
  return slugify(title, { lower: true, strict: true, trim: true });
}

/* GET /api/success-stories */
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (!req.headers.authorization) filter.status = "published";
    if (req.query.status) filter.status = req.query.status;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.q) {
      filter.$or = [
        { title: { $regex: req.query.q, $options: "i" } },
        { summary: { $regex: req.query.q, $options: "i" } },
      ];
    }
    const stories = await Story.find(filter).sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* GET /api/success-stories/:slugOrId */
router.get("/:slugOrId", async (req, res) => {
  try {
    const { slugOrId } = req.params;
    const story =
      (await Story.findOne({ slug: slugOrId })) ||
      (await Story.findById(slugOrId).catch(() => null));
    if (!story) return res.status(404).json({ message: "Story not found" });
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* POST /api/success-stories */
router.post("/", protect, async (req, res) => {
  try {
    const { title, slug, ...rest } = req.body;
    const finalSlug = slug || makeSlug(title);
    const story = await Story.create({ title, slug: finalSlug, ...rest });
    res.status(201).json(story);
  } catch (err) {
    if (err.code === 11000)
      return res.status(409).json({ message: "Slug already exists" });
    res.status(400).json({ message: err.message });
  }
});

/* PUT /api/success-stories/:id */
router.put("/:id", protect, async (req, res) => {
  try {
    const story = await Story.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!story) return res.status(404).json({ message: "Story not found" });
    res.json(story);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* PATCH /api/success-stories/:id/status */
router.patch("/:id/status", protect, async (req, res) => {
  try {
    const story = await Story.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );
    if (!story) return res.status(404).json({ message: "Story not found" });
    res.json(story);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* DELETE /api/success-stories/:id */
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

