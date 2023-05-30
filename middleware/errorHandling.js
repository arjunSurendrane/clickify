/**
 * Global error handling middleware
 */
export const errorHandling = (err, req, res, next) => {
  console.log(err);
  res.status(404).json({
    status: "failed",
    message: err,
  });
};
