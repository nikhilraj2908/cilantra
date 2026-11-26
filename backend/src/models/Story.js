const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    summary: { type: String, default: "" },
    content: { type: String, default: "" },
    client: { type: String, default: "" },
    industry: { type: String, default: "" },
    category: { type: String, default: "" },
    tags: [{ type: String }],
    featured_image: { type: String, default: "" },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
  },
  { timestamps: true },
);

storySchema.index({ slug: 1 });
storySchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model("Story", storySchema);

