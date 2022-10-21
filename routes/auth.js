
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express"

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    const newUser = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }
    })

    const accessToken = createToken(newUser.id)
    return res.header("Authorization", accessToken).send(accessToken)

})

authRouter.post("/login", async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        }
    })

    if (!user) {
        return res.send("Email Not Found")
    }

    const passwordCompare = bcrypt.compareSync(req.body.password, user.password)
    const accessToken = createToken(user.id)


    if (!passwordCompare) {
        return res.send("Invalid Password")
    } else {
        return res.header("Authorization", accessToken).send(accessToken)
    }


})

const createToken = (userId) => {
    const accessToken = jwt.sign({ id: userId }, process.env.SECRET_TOKEN, {
        expiresIn: 60 * 24 // expires in 24 hours
    });

    return accessToken
}





export default authRouter