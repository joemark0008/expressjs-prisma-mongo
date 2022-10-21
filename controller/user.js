import prisma from "../lib/prisma.js"



export const createNewUser = async (payload) => {
    const newUser = await prisma.user.create({
        data: {
            name: payload,
            email: "jom@gmail.com"
        }
    })
    return newUser
}
