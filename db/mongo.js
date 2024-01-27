const mongoose = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL + "/Xitter");
    console.log(`Connected to mongodb`);
  } catch (error) {
    console.error(`Mongoose Connection Error:${error}`);
  }
}

module.exports = dbConnect;
