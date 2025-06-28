const jwt = require("jsonwebtoken");

exports.isAdmin = (req, res, next) => {


  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token missing." });
  }

  const user = jwt.decode(token, process.env.JWT_SECRET);

  if (!user) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }

  if (user.role !== "admin") {
    return res
      .status(401)
      .json({ message: "This is Protected route for Admin" });
  }
  next();
};
