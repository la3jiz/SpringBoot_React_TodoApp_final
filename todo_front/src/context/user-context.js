import { createContext } from "react"

export const UserContext = createContext({
    isLoggedIn:false,
    token:null,
    userId:null,
    login:()=>{},
    logout:()=>{},
});