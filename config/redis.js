import Redis from "redis";

/**
 * Connect to Redis
 * @returns {Object}
 */
export async function connectToRedis() {
  const redisClient = Redis.createClient();
  await redisClient.connect();
  console.log("connect to redis");
  return redisClient;
}
