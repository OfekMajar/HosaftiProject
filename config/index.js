const dotenv = require("dotenv");

dotenv.config();

const { MONGO_URL } = process.env;
const { JWT_SECRET } = process.env;
const { EMAIL_USERNAME } = process.env;
const { EMAIL_PASSWORD } = process.env;
const {OLD_MONGO_URL} =process.env
const config = {
  MONGO_URL,
  JWT_SECRET,
  EMAIL_PASSWORD,
  EMAIL_USERNAME,
  OLD_MONGO_URL
};

module.exports = { config };
