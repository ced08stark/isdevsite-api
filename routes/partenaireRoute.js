import express from "express"
const router = express.Router();
import partenaireController from "../controllers/partenaireController.js";



router.get('/', partenaireController.getAll)
router.get('/:id', partenaireController.get)
router.post('/', partenaireController.create)
router.put('/:id', partenaireController.update)
router.delete('/:id', partenaireController.delete)


export default router