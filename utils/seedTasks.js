require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("../models/Task");

const seedTask = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🌱 Connected to MongoDB");

    await Task.deleteMany();

    const tasks = [
      {
        title: "Build authentication flow",
        area: "Backend",
        description:
          "Implement JWT-based authentication with login and registration endpoints.",
        todos: [
          "Create user model",
          "Hash passwords with bcrypt",
          "Generate JWT tokens",
        ],
        tags: ["auth", "security", "api"],
        dueDate: new Date("2026-02-10"),
        status: "in-progress",
        userId: "697e57ebe8dfcfc36ea37efb",
      },
      {
        title: "Design dashboard UI",
        area: "Frontend",
        description:
          "Create responsive dashboard layout using React and Tailwind.",
        todos: [
          "Wireframe layout",
          "Build reusable components",
          "Add dark mode toggle",
        ],
        tags: ["ui", "react", "design"],
        dueDate: new Date("2026-02-15"),
        status: "todo",
        userId: "697e57ebe8dfcfc36ea37efb",
      },
      {
        title: "Set up task API routes",
        area: "API",
        description:
          "Create CRUD routes for tasks and secure them with authentication middleware.",
        todos: [
          "POST /tasks",
          "GET /tasks",
          "PUT /tasks/:id",
          "DELETE /tasks/:id",
        ],
        tags: ["express", "routes", "crud"],
        dueDate: new Date("2026-02-20"),
        status: "completed",
        userId: "697e57ebe8dfcfc36ea37efb",
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
