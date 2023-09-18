import express from 'express'
const router = express.Router()
import foireController from '../controllers/FoireController.js'



router.get("/", foireController.getAll)
router.get("/:id", foireController.get)
router.post("/", foireController.create)
router.put("/:id", foireController.update)
router.delete("/:id", foireController.delete)


export default router
