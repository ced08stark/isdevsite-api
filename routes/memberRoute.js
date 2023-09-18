import express from 'express'
const router = express.Router()
import memberController from '../controllers/memberController.js'
import multer from 'multer'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/images/')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}_${Date.now()}`)
  },
})

const fileFilter = (req, file, cb) => {
  //rejet a file
  if (file.mimetype === 'image/jepg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 5,
  },

  fileFilter: fileFilter,
})



router.get('/', memberController.getAll)
router.get('/:id', memberController.get)
router.post('/', memberController.create)
router.put('/:id', memberController.update)
router.delete('/:id', memberController.delete)


export default router
