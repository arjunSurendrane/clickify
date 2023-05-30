import {
  findOriginalLink,
  saveShortenedLink,
} from "../services/shortenedUrl.js";
import { catchAsync } from "../utils/catchAsync.js";

/**
 * Url Shortner function
 */
export const urlShortner = catchAsync(async (req, res) => {
  const { url } = req.body;
  const baseUrl = process.env.BASE_URL;
  const data = await saveShortenedLink(url);
  res.json({ shortURL: `${baseUrl}${data.shortLink}/ly` });
});

/**
 * Redirect to original link
 */
export const redirectUrl = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await findOriginalLink(id);
  res.redirect(data.link);
});

/**
 * Home page render function
 */
export const renderHome = (req, res) => {
  res.render("index");
};
