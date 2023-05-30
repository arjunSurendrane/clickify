import express from "express";
import { urlShortner } from "../controller/shortner.js";
const router = express.Router();

router.post("/shrink", urlShortner);

export default router;
