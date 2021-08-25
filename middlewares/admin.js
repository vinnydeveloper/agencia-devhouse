module.exports = (req, res, next) => {
  const { admin } = req.query;

  if (!admin || admin != "banana") {
    res.redirect("/home");
  }

  next();
};
