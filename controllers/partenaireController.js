import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const {partenaire: Partenaire} = prisma


export default{
    getAll(req, res){
        Partenaire.findMany()
        .then((data) => res.status(200).send(data))
        .catch(error => res.status(500).send({message: error.message || "server error"}))
    },
    get(req, res){
        const {id} = req.params
        Partenaire.findUnique({
          where: {
            id: parseInt(id),
          },
        })
          .then((data) => res.status(200).send(data))
          .catch((error) => res.status(500).send({ message: error.message || 'server error' }))
    },
    create(req, res){
        const {name, image} = req.body
        prisma.partenaire.create({
          data: {
            name,
            image,
          },
        })
          .then(() => res.status(200).send(data))
          .catch((error) => res.status(500).send({ message: error.message || 'server error' }))

    },
    update(req, res){
        const { name } = req.body
        Partenaire.update({
          where: {
            name,
          },
        })
          .then(() => res.status(200).send(data))
          .catch((error) => res.status(500).send({ message: error.message || 'server error' }))
    },
    delete(req, res){
        const { id } = req.params
        Partenaire.delete({
          where: {
            id: parseInt(id),
          },
        })
          .then(() => res.status(200).send(data))
          .catch((error) => res.status(500).send({ message: error.message || 'server error' }))
    }
}