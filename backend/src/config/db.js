const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch {
  // ignore if restricted
}

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌  MONGODB_URI not set. Add it to your .env file.");
    process.exit(1);
  }

  await mongoose.connect(uri);
  isConnected = true;
  console.log("🗄️   MongoDB connected");

  // Seed initial admin if none exists
  await seedAdmin();
}

async function seedAdmin() {
  const User = require("../models/User");
  const count = await User.countDocuments({ role: "admin" });
  if (count > 0) return;

  const email = process.env.ADMIN_EMAIL ?? "admin@cilantra.in";
  const password = process.env.ADMIN_PASSWORD ?? "Change_me_123!";
  const hash = await bcrypt.hash(password, 12);
  await User.create({ email, password: hash, role: "admin" });
  console.log(`👤  Admin seeded: ${email} (change password immediately!)`);
}

module.exports = { connectDB };

