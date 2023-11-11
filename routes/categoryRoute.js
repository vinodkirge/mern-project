import express from "express";
import { categoryController, getCategoryController} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/create-category" , categoryController);
router.get("/get-category" , getCategoryController);
export default router;