const validator = require("validator");

const validateRegisterData = (req) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname) {
    throw new Error("Name is not valid");
  } else if (!validator.isEmail(email)) {
    throw new Error(" Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

module.exports = {
  validateRegisterData,
};
