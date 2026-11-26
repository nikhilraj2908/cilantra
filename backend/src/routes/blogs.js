const express = require("express");
const slugify = require("slugify");
const Blog = require("../models/Blog");
const protect = require("../middleware/auth");
const { adminOnly } = require("../middleware/auth");

const router = express.Router();

function makeSlug(title) {
  return slugify(title, { lower: true, strict: true, trim: true });
}

/* ── Public routes ───────────────────────────────────────────────────── */

/* GET /api/blogs  ?status=published&q=&category= */
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (req.user === undefined) filter.status = "published"; // unauthenticated → public only
    if (req.query.status) filter.status = req.query.status;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.q) {
      filter.$or = [
        { title: { $regex: req.query.q, $options: "i" } },
        { excerpt: { $regex: req.query.q, $options: "i" } },
      ];
    }
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* GET /api/blogs/:slugOrId */
router.get("/:slugOrId", async (req, res) => {
  try {
    const { slugOrId } = req.params;
    const blog =
      (await Blog.findOne({ slug: slugOrId })) ||
      (await Blog.findById(slugOrId).catch(() => null));
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ── Protected routes ────────────────────────────────────────────────── */

/* POST /api/blogs */
router.post("/", protect, async (req, res) => {
  try {
    const { title, slug, ...rest } = req.body;
    const finalSlug = slug || makeSlug(title);
    const blog = await Blog.create({ title, slug: finalSlug, ...rest });
    res.status(201).json(blog);
  } catch (err) {
    if (err.code === 11000)
      return res.status(409).json({ message: "Slug already exists" });
    res.status(400).json({ message: err.message });
  }
});

/* PUT /api/blogs/:id */
router.put("/:id", protect, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* PATCH /api/blogs/:id/status */
router.patch("/:id/status", protect, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* DELETE /api/blogs/:id */
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

