// make express applicaton
// attach port to it

import express, { json } from "express";
import firstRoute from "./src/routes/firstRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import connectToDb from "./src/connectToDb.js";
import cors from "cors";

let app = express();

app.listen(8000,  () => {
  console.log("application runing at port 8000");
   connectToDb();
});

app.use(cors())
app.use(json())
app.use(express.json()); // this is put to display the json input from postman in vs console i.e terminal

// app.use("/", firstRoute); //ctrl space for import
app.use("/product", productRoutes);

/*
database
crud

 c = create   (post) 
 r = read     (get) 
 u = upate    (put/patch)
 d = delete   (delete)



 making api means

defining response for each reqest 

 */
