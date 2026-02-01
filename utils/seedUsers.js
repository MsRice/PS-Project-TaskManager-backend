require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("🌱 Connected to MongoDB");

    // Clear existing users (safe for dev)
    await User.deleteMany();

    const users = [
      {
        username: "Superman",
        email: "Krypton@dc.com",
        password: "password123",
        user_img:
          "https://preview.redd.it/7dfeyosgb6351.jpg?width=1080&crop=smart&auto=webp&s=d82e2301c33608223c4578679b38657a5280a754",
        areas: [
          { name: "Task", color: "#cf4d6f" },
          { name: "Per Scholas", color: "#029AD3" },
        ],
      },
      {
        username: "riceDev",
        email: "rice@example.com",
        password: "securepass456",
        user_img:
          "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png",
        areas: [
          { name: "Task", color: "#cf4d6f" },
          { name: "Per Scholas", color: "#029AD3" },
          { name: "Georgia Tech", color: "#F5CC7C" },
        ],
      },
      {
        username: "Scarlett Witch",
        email: "sw_momma@marvel.com",
        password: "securepass456",
        user_img:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/1*9XQlc5ayl-KL7l4Ox7aSrg.jpeg",
      },

      {
        username: "Luke",
        email: "mrLW_shh@example.com",
        password: "theHubby!",
        user_img:
          "https://i.tribune.com.pk/media/images/fizza-fi-2025-12-22t124326-8251766389251-0/fizza-fi-2025-12-22t124326-8251766389251-0-412x290.webp",
        areas: [{ name: "Ton-tivities", color: "#0221d3" }],
      },
    ];

    await User.insertMany(users);

    console.log("✅ Users seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedUsers();
