import express from "express";
import { protect } from "./modules/auth";
import router from "./router";
import { createNewUser, signin } from "./handlers/user";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", protect, router);
app.post("/signup", createNewUser);
app.get("/login", signin);

export default app;
