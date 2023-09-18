import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { foire: Foire } = prisma



export default{
    getAll(req, res){
        //const {id} = req.params.id;
        Foire.findMany()
        .then((data) => {res.status(200).send(data)})
        .catch(error => res.status(500).send({message: error.message || "error du serveur"}))
    },
    get(res, req){
         const { id } = req.params.id
         Foire.findMany(
             {
                where: {id}
             }
         )
           .then((data) => {
             res.status(200).send(data)
           })
           .catch((error) => res.status(500).send({ message: error.message || 'error du serveur' }))
    },
    create(res, req){
        const {question, response} = req.body
        
        Foire.create({
            data : {
                question,
                response
            }
        })
        .then(() => res.status(201).send({message: "foire add success"}))
        .catch(error => res.status(500).send({message: error.message || "foire add success"}))

    },
    update(req, res){
        const { id } = req.body

        Foire.update({
          where: {
            id,
          },
        })
          .then(() => res.status(201).send({ message: 'foire update success' }))
          .catch((error) => res.status(500).send({ message: error.message || 'internal sever error' })) 
    },
    delete(req, res){
        const { id } = req.params

        Foire.delete({
          where: {
            id,
          },
        })
          .then(() => res.status(201).send({ message: 'foire delete success' }))
          .catch((error) => res.status(500).send({ message: error.message || 'server error' })) 
    }


}