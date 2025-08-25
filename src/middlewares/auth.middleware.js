import "dotenv/config";
import jwt from "jsonwebtoken";
import userServices from "../service/user.services.js";

export function authMiddleware(req, res, next) {
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader) {
        return res.status(401).send({ message: "The token was not informed"});
    }

    const partsToken = tokenHeader.split(" ");
    if (partsToken.length !== 2) {
        return res.status(401).send({ message: "Invalid token"});
    }

    const [ scheme, token ] = partsToken;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ message: "Token malformatted"});
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Token invalid"});
        }

        const user = await userServices.findUserByIdService(decoded.id);
        if (!user || !user.id) {
            return res.status(401).send({ message: "Invalid token"});
        }

        req.userId = user.id;
        return next();

        
    });
}