const dotenv = require("dotenv");
const path = require("path");

// Always resolve to project root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connection Successful");
  } catch (error) {
    console.log("❌ Something went wrong", error);
    process.exit(1);
  }
};

connectDb();

module.exports = connectDb;
