import jwt from "jsonwebtoken";

export const validateJwt = (req, res, next) => {
const token = req.headers.authorization?.split(' ')[1];
if (!token) {
    return res.status(401).json({message : "Token no es valido no encontrado"})
}

//verificar el token 
jwt.verify(token, "secreto",(err , user) => {
    if (err){
        return res.status(401).res.json({message : " Token invalido o expirado"})
    }
    req.user = user;
    next() 
})
}