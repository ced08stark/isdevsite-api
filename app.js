import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import memberRoute  from './routes/memberRoute.js'
import productRoute  from './routes/productRoute.js'
import partenaireRoute from './routes/partenaireRoute.js'
import { foireRoute } from './routes/index.js'


const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cors())
server.use('/static', express.static('static/'))

server.use((req, res, next) => {
  res.setHeader('Access-Controll-Allow-Origin', '*')
  res.setHeader('Access-Controll-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization')
  res.setHeader('Access-Controll-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is working !',
  })
})

server.use('/member', memberRoute)
server.use('/product', productRoute)
server.use('/partenaire', partenaireRoute)
server.use('/foire', foireRoute)

server.listen(process.env.SERVER_PORT)

export default server
