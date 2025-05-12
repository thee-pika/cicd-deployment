import express from "express";
import { prisma } from "@repo/db/client";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/user", async (req, res) => {
  const user = await prisma.user.findFirst();
  console.log("user ", user);

  res.json({ user });
});

app.post("/login", async (req, res) => {
  const data = req.body;
  console.log("data from backend", data);

  const user = await prisma.user.findFirst({
    where: {
      username: data.username,
    },
  });

  if (!user) {
    res.json({ user: "no user found!!" });
    return;
  }

  res.json({ id: user.id, message: "USER FOUND!!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
