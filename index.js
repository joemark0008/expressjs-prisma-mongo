import express from "express"
import postRouter from "./routes/post.js";
import userRouter from "./routes/user.js";

const app = express()
app.use(express.json())


app.use(postRouter, userRouter);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))