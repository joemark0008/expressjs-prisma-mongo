import express from "express"
import { createNewUser } from "../controller/user.js";
const userRouter = express.Router();


userRouter.post("/users", async (req, res) => {
    const newUser = await createNewUser()
    return res.json(newUser)
})


export default userRouter