import { Router } from "express";
import Product from "../schema/productSchema.js";

let productRoutes = Router();

productRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await Product.create(req.body);
      // let savedProduct = await product.save();
      res.status(201).json({
        success: true,
        message: "product created successfully",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .get(async(req, res, next) => {
    try {
      let result = await Product.find();
      res.status(200).json({
      success: true,
      message: "user created successfully",
      data:result
    });
      
    } catch (error) {
      res.status(400).json({
        success: false,
        message:error.message
      }) 
    }
  });

productRoutes
  .route("/:id") //localhost:8000/product/id
  .get((req, res, next) => {
    try {
        let result = Product.findById(req.params.id)
        res.status(200).json({
        success: true,
        message: "user created successfully",
        data:result
    });
    } catch (error) {
      res.status(400).json({
        success:false,
        message: error.message
      })
    }
  })
  .patch(async(req, res, next) => {
    try {
      let result = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.status(400).json({
      success: true,
      message: "user created successfully",
      data:result
    });
      
    } catch (error) {
      res.status(400).json({
        success:false,
        message:error.message
      })
      
    }

  })
  .delete((req, res, next) => {
    res.status(400).json({
      success: true,
      message: "user created successfully",
    });
  });

export default productRoutes;
