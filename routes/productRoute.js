import express  from "express";
const router = express.Router();
import productController from "../controllers/productController.js";



router.get('/', productController.getAll)
router.get('/:id', productController.get)
router.post('/', productController.create)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)


export default router