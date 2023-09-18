import pkg from "@prisma/client"

const {PrismaClient} = pkg
const prisma = new PrismaClient()
const {member: Member} = prisma



async function main() {
   await Member.create({
     data: {
       name: 'ISMAEL ISSAN',
       image: 'http://localhost:5000/web-api/static/image1.jpg',
       poste: 'CEO & FOUNDER',
     },
   })
  
}

main()
    .catch((error) =>{
        console.log(error)
        process.exit(1)
    })
    .finally(async () =>{
        await prisma.$disconnect()
    })