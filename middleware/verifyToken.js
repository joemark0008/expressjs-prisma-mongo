import jwt from "jsonwebtoken";


function verify(req, res, next) {
    const token = req.header("Authorization")

    if (!token) return res.status(401).send("access denied")

    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).send("Invalid Token")
    }
}

export default verify