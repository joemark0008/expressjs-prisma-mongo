
import prisma from "../lib/prisma.js"


export const createPost = async (payload) => {
    const newUser = await prisma.post.create({
        data: {
            title: payload.title
        }
    })
    return newUser
}


export const getAllPost = async () => {
    const getAllPost = await prisma.post.findMany()
    return getAllPost
}

export const deletePost = async postId => {
    const post = await prisma.post.delete({
        where: {
            id: postId.id
        }
    })
    return post
}