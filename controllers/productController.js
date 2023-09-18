import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const {product: Product} = prisma



export default{
    getAll(req, res){
        Product.findMany()
        .then(data => res.status(200).send(data))
        .catch((error) => {
            res.status(500).send({message: error.message})
        })
    },
    get(req, res){
        const { id } = req.params
        Product.findUnique({
            where:{
                id: id
            }
        })
        .then(data => res.status(200).send(data))
        .catch((error) => res.status(500).send(error.message))
    },
    create(req, res){
        const {image, productType, description, name} = req.body
        Product.create({
          where: {
            data: {
              image,
              name,
              productType,
              description,
            },
          },
        })
          .then(() => res.status(201).send({ message: 'product add success!!!' }))
          .catch(res.status(500).send({ message: error.message || `some error occured when updating product` }))
    },
    update(req, res){
        const {name} = req.body
        Product.update({
          where: {
            id: parseInt(id),
            data: {
              name,
            },
          },
        })
          .then(() => res.status(201).send({ message: 'product update success!!!' }))
          .catch(res.status(500).send({ message: error.message || `some error occured when updating Product` }))
    },
    delete(req, res){
        const {id} = req.params
        Product.delete({ 
            where: {
                id: parseInt(id)
            }
         })
          .then(() => res.status(201).send({ message: `product ${id} has deleted` }))
          .catch(
            res.status(500).send({ message: error.message || 'some error occured when delete user with id=${id}' })
          )
    }
}