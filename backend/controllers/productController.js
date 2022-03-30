const Product = require("../models/productModel");

const fetchProduct = async (req, res) => {
  try {
    //FILTERING

    //First get all query parameters from the url
    const queryObj = { ...req.query };

    //delete and extract special query params which isnt from the data field itself
    //Page and limit will be used as pagination
    //Sort will be used for sorting
    // Fields qill be used as limit fields which only show certain field from response body
    const excludedFields = ["page", "sort", "limit", "fields"];

    excludedFields.forEach((el) => delete queryObj[el]);

    // CONVERT QUERY PARAMS TO STRING
    let queryString = JSON.stringify(queryObj);

    // USING REGEX CONVERT THE SPECIAL OPERATORS INTO A FORMAT WG=HICH MONGO DB WILL RECOGNIZE
    // Ie
    // {price:{gte: '5' }} map into => {price:{$gte: '5' }}
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    // CONVERT BACK THE QUERY DATA FROM STRING TO AN OBJECT USING JSON.parse
    let query = Product.find(JSON.parse(queryString));

    //SORTING
    //IF SORT PARAM ISNT INCLUDED IN THE URL, SORT THE FIELD IN DESCENDING ORDERBY DEFAULT USING createdAt
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //FIELD LIMITING
    // Select pattern .select("firstparam secondParam")  it will only show the selected field, add minus sign for excluding (include everything except the given params)
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__V");
    }

    //PAGINATION
    // Page=2 &limit=10, 1-10 page 1, 11-20 page 2, 21-30 page 3

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    // EXECUTE QUERY
    const products = await query;
    res.status(200).json({
      status: "Success",
      results: products.length,
      data: { products },
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    //   DESTRUCTURE REQ.BODY
    const { productID, name, price, description, brand } = req.body;
    // CHECK IF PRODUCT EXISTS USING UNIQUE PROD ID
    const product = await Product.findOne({ productID });
    if (product) return res.status(400).json({ msg: "Product already exists" });

    //CHECK IF IMAGE IS EMPTY
    // if (!images) return res.status(400).json({ msg: "No image uploaded" });

    // CREATE NEW PRODUCT
    const newProduct = new Product({
      productID,
      name,
      price,
      description,
      brand,
    });

    //SAVE NEW PRODUCT
    await newProduct.save();

    return res.status(200).json({ msg: "Product created successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// const singleFileUpload = async (req, res) => {
//   try {
//     // const file = req.file;
//     console.log(req.file);
//     res.status(201).json({ msg: "File uploaded Successfully" });
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

const deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.fetchProduct = fetchProduct;
exports.createProduct = createProduct;
// exports.singleFileUpload = singleFileUpload;
exports.deleteProduct = deleteProduct;
exports.updateProduct = updateProduct;
