require("dotenv").config();

const connectDB = require("./db/connect");
const productModel = require("./models/product_model");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await productModel.deleteMany();
    await productModel.create(jsonProducts);
    console.log("sucess");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
