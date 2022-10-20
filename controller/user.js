import prisma from "../lib/prisma.js"



export const createNewUser = async (payload) => {
    const newUser = await prisma.user.create({
        data: {
            name: "joem",
            email: "jom@gmail.com"
        }
    })
    return newUser
}
