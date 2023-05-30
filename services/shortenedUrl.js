import mongoose from "mongoose";
import ShortenedUrl from "../model/shortenedUrl.js";
import { getOrSetFunction } from "./redis.js";

/**
 * Store link in to database
 * @param {String} link - url link
 * @returns {Object} - Mongodb collection
 */
export const saveShortenedLink = async (link) => {
  try {
    const res = await ShortenedUrl.findOne({ link });
    if (res) return res;
    const id = new mongoose.Types.ObjectId();
    let shortLink = JSON.stringify(id).substring(1, 8);
    const data = await ShortenedUrl.findOne({ link: shortLink });

    if (data) shortLink = "dkhfk";
    return await ShortenedUrl.create({
      _id: id,
      link,
      shortLink,
    });
  } catch (error) {
    return error;
  }
};

/**
 * Find Link
 * @param {String} id - shortlink key
 * @returns - Mongodb collection
 */
export const findOriginalLink = async (id) => {
  try {
    // return await getOrSetFunction(`${id}`, () => {
    //   return ShortenedUrl.findOne({ shortLink: id });
    // });
    return ShortenedUrl.findOne({ shortLink: id });
  } catch (error) {
    return error;
  }
};

function sample(data) {
  return data;
}

function main(data) {
  console.log("hello", data);
}

main(sample("arjun"));
