import { Router } from "express";
import { findAll } from "./handlers/user";

const router = Router();


/**
 * Update
 */

router.get("/getallusers", findAll);

router.get("/update/:id", (req, res) => {});

router.post("/update", (req, res) => {});

router.put("/update/:id", (req, res) => {});

router.delete("/update/:id", (req, res) => {});


export default router;