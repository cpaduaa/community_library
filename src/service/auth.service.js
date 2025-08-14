import jwt from "jsonwebtoken";

function generateJWT(id) {
    return jwt.sign(
        { id }, 
        "f6b72e493f8a41dc72f080a44dd0ff5380fdaa3446516a50067460ad6b84fa15",
        {expiresIn: 86400}
    );
}

export { generateJWT }