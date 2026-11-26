const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, default: "" },
    organisation: { type: String, default: "" },
    service_interest: { type: String, default: "" },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Contact", contactSchema);

