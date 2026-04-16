const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// 🔗 MongoDB bağlantı
mongoose.connect("mongodb://127.0.0.1:27017/rentdb");

// 📦 MODELLER
const User = mongoose.model("User", {
  username: String,
  password: String,
  role: String
});

const Car = mongoose.model("Car", {
  name: String,
  price: Number,
  img: String
});

// 🔐 LOGIN
app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.send("Hatalı giriş");
  res.send(user);
});

// 🚗 ARAÇLAR
app.get("/cars", async (req, res) => {
  const cars = await Car.find();
  res.send(cars);
});

// ➕ ARAÇ EKLE (admin)
app.post("/add-car", async (req, res) => {
  await Car.create(req.body);
  res.send("Eklendi");
});

// ❌ ARAÇ SİL
app.post("/delete-car", async (req, res) => {
  await Car.findByIdAndDelete(req.body.id);
  res.send("Silindi");
});

// 🔥 SERVER
app.listen(3000, () => console.log("Server çalışıyor"));
