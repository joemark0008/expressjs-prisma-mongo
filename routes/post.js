import express from "express"
import { createPost, deletePost, getAllPost } from "../controller/post.js";
import verify from '../middleware/verifyToken.js'
const postRouter = express.Router();



postRouter.get("/posts", verify, async (req, res) => {
    const getPosts = await getAllPost()
    return res.json(getPosts)
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


