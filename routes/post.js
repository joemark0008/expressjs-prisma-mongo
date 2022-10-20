import express from "express"
import { createPost, deletePost, getAllPost, } from "../controller/post.js";
const postRouter = express.Router();

postRouter.get("/posts", async (req, res) => {
    const deletePost = await getAllPost()
    return res.json(deletePost)
})


postRouter.post("/posts", async (req, res) => {
    const payload = req.body
    const newPost = await createPost(payload)
    return res.json(newPost)

})

postRouter.delete("/posts", async (req, res) => {
    const postId = req.body
    console.log("post", postId)
    const post = await deletePost(postId)
    return res.json(post)

})

export default postRouter


