const express = require("express");
const rateLimit = require("express-rate-limit");
const Contact = require("../models/Contact");
const protect = require("../middleware/auth");
const { adminOnly } = require("../middleware/auth");

const router = express.Router();

/* Stricter rate limit for contact form */
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { message: "Too many submissions. Please try again later." },
});

/* POST /api/contact  – public */
router.post("/", contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }
    await Contact.create(req.body);
    res.status(201).json({ message: "Message received! We'll be in touch soon." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* GET /api/contact  – admin only */
router.get("/", protect, adminOnly, async (_req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* DELETE /api/contact/:id  – admin only */
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

