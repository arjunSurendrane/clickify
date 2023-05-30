/**
 * Connected to Localhost
 * @param {Function} app - express()
 */
export const connectedToLocalhost = (app) => {
  const PORT = process.env.PORT || 6000;
  app.listen(PORT, (err) => {
    if (err) return console.log(`failed to connect PORT-${PORT}`);
    console.log(`connected to PORT-${PORT}`);
  });
};
