import express from "express";
import formidable from 'express-formidable';
import { createProductController, getProductController, photoController, searchController } from "../controllers/productController.js";


const router = express.Router();

router.post("/create-product", formidable() ,createProductController);
router.get("/get-product", getProductController);
router.get("/get-photo/:pid" , photoController);
router.get("/search/:keyword", searchController);

export default router;