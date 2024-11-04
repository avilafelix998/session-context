import Router from "express"
import { loginUserCtrl, logoutUserCtrl } from "../controllers/user.controllers.js"



const autRoutes = Router()

autRoutes.post("/login",loginUserCtrl)
autRoutes.post("/logout",logoutUserCtrl)

export default autRoutes



