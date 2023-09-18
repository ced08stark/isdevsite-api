import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { member: Member } = prisma


export default {
  getAll(req, res) {
    Member.findMany()
    .then((data) => {res.status(200).send(data)})
    .catch((error) =>{
        res.status(500).send({message: error.message || 'some error occured when retrieving users'})
    })
  },
  get(req, res) {
    const { id } = req.params
     Member.findUnique({
       where: {
         id: parseInt(id),
       },
     })
       .then((data) => {
        data
          ? res.status(200).send(data)
          : res.status(404).send({
              message: `cannot find user with id=${id}`,
            })
       })
       .catch((error) => {
         res.status(500).send({ message: error.message || `some error occured when retrieving user with id=${id}` })
       })
  },
  create(req, res) {
  
    const { name, poste, image } = req.body
    Member.create({
    
      data: {
        name,
        image,
        poste
      }
    })
      .then((data) => {
        data
          ? res.status(201).send({
              message: `User was add successfully`,
            })
          : res.status(404).send({
              message: `cannot find user with id=${id}`,
            })
       
      })
      .catch((error) => {
        res.status(500).send({ message: error.message || `some error occured when retrieving user with id=${id}` })
      })
  },
  update(req, res) {
    const { id } = req.params
    const { name } = req.body
    Member.findUnique({
      where: {
        id: parseInt(id),
        data: {
            name: name
        }
      },
    })
      .then(() => {
        res.status(200).send({
          message: `User was update successfully`,
        })
          
      })
      .catch((error) => {
        res.status(500).send({ message: error.message || `some error occured when updating user with id=${id}` })
      })
  },
  delete(req, res) {
    const { id } = req.params
    Member.delete({
      where: {
        id: parseInt(id),
      },
    })
      .then(() => {
         res.status(200).send({
           message: `User was deleted successfully`,
         })
       
      })
      .catch((error) => {
        res.status(500).send({ message: error.message || `some error occured when delete user with id=${id}` })
      })
  },
}