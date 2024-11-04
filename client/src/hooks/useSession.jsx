import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider.jsx"; // Asegúrate que esta ruta sea correcta

const useSession = () =>{
return useContext(SessionContext)
};

export default useSession;

