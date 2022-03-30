const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productID: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      lowercase: true,
    },
    // images: {
    //   type: Object,
    //   required: true,
    // },
    brand: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
