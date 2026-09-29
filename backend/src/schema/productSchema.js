import {model, Schema } from "mongoose";

let productSchema = Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    price:{
        type:Number,
        required:[true,'price is required']

    },
    quantity:{
        type:Number,
        required:[true,'quantity is required']

    },
    description:{
        type:String,
        required:[true,'description is required']

    }
});
let Product = model("Product", productSchema);
export default Product;

// name
// price
// quantity
// // description
// Your existing findByIdAndUpdate(id, req.body, {new:true}) → label the route .patch()
// If you want to keep it on .put(), you must add { overwrite: true } so it behaves like a real PUT
// .put(async (req, res) => {
//   try {
//     const result = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, overwrite: true, runValidators: true }
//     );

//     if (!result) {
//       return res.status(404).json({ success: false, message: "product not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: "product updated successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error.message });
//   }
// })
// .patch(async (req, res) => { /* same body, drop overwrite */ });
// Practical advice
// For most CRUD apps, register both on /:id so clients can use either:
// productRoutes
//   .route("/:id")
//   .put(updateProduct)      // full replace  → needs overwrite: true
//   .patch(updateProduct)    // partial       → no overwrite
//   .get(getOneProduct)
//   .delete(deleteProduct)