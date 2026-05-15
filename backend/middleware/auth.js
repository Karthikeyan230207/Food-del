
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization;
    if(!token){
        return res.json({ message: "Not authorized please Login again" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        next();
    } catch (error) {
        res.json({ message: "Invalid token." });
    }
}


export default authMiddleware;