import express from "express";
import { protect } from "./modules/auth";
import router from "./router";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(express.json());


app.use("/api", protect, router);
app.post("/user", createNewUser);
app.get("/signin", signin);

export default app;
