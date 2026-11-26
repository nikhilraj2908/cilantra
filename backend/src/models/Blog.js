const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, default: "" },
    content: { type: String, default: "" },
    author: { type: String, default: "" },
    category: { type: String, default: "" },
    tags: [{ type: String }],
    featured_image: { type: String, default: "" },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
  },
  { timestamps: true },
);

blogSchema.index({ slug: 1 });
blogSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model("Blog", blogSchema);

