import mongoose from "mongoose";

/**
 * shortenedUrl Schema
 */
const shortenedUrlSchema = new mongoose.Schema({
  link: { type: String, required: true, unique: true },
  shortLink: {
    type: String,
    unique: true,
  },
});

/**
 * Create shortenedUrls collection
 */
const ShortenedUrl = mongoose.model("shortenedUrl", shortenedUrlSchema);
export default ShortenedUrl;
