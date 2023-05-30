/**
 * Handling async function error
 * @description - async function must have next argument
 * @param {Function} fn - async function
 */
export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
};
