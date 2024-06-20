import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //   required: [true, "Please enter the product name"],
      minlength: 3,
      maxlength: 100,
    },
    price: {
      type: Number,
      //   required: [true, "Please enter the product price"],
      min: 0,
    },
    category: {
      type: String,
      //   required: [true, "Please enter the product category"],
      minlength: 3,
      maxlength: 50,
    },
    description: {
      type: String,
      //   required: [true, "Please enter the product description"],
      minlength: 10,
      maxlength: 1000,
    },
    stock: {
      type: Number,
      min: 0,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
