import jwt from "jsonwebtoken";
import {conexion} from "../db/dataBase.js"

    //login 
    export const loginUserCtrl = async (req, res)=>{
    const {username,password} = req.body
    console.log(username,password)
    try {
        const conection = await conexion ()
        const [searchUser] = await conection.query("SELECT * FROM user WHERE username LIKE ? AND password LIKE ?",[username,password])
        conection.end()
        if (searchUser.length === 0) {
            return res.status(401).json({message:"usuario no encontrado"})
        }
        
        const user = searchUser[0]
    
        const token = jwt.sign({
            id: user.id,
            user: user.username,
        }, "secreto" , {expiresIn:"1h"})
    
        
        res.json({
            user
        
        })
    
    } catch (error) {
        console.error("error al iniciar sesion",error)
    }
    }


    //logout 
    export const logoutUserCtrl = (req, res) => {
      res.status(200).json({message : "sesion cerrada"})
    }    