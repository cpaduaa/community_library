import jwt from "jsonwebtoken";
import "dotenv/config";
import userRepository from "../repositories/use.repositories.js";
import bcrypt from "bcrypt";

function generateJWT(id) {
    return jwt.sign(
        { id }, 
        SECRET_JWT,
        "f6b72e493f8a41dc72f080a44dd0ff5380fdaa3446516a50067460ad6b84fa15",
        { expiresIn: 86400 }
    );
}
async function loginService(email, password) {
    const user = await userRepository.findUserByEmailRepository(email);
    if (!user) throw new Error("Invalid user!");
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid password!");
    return generateJWT(user.id);
}
export { generateJWT, loginService };