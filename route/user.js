import express from "express";
import { redirectUrl, renderHome } from "../controller/shortner.js";
const router = express.Router();

router.get("/", renderHome);
router.get("/:id/ly", redirectUrl);

export default router;
