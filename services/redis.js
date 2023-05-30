import { connectToRedis } from "../config/redis.js";

/**
 * Get or set function for redis
 * @param {String} key - Redis key
 * @param {Function} cb - function for fetch data from database
 * @returns {Object} - redis data
 */
export async function getOrSetFunction(key, cb) {
  try {
    const redisClient = await connectToRedis();
    const res = await redisClient.get(key);
    if (res != null) {
      return JSON.parse(res);
    }
    const fetchData = await cb();
    redisClient.setEx(key, process.env.REDIS_EXPIRE, JSON.stringify(fetchData));
    return fetchData;
  } catch (error) {
    return error;
  }
}
