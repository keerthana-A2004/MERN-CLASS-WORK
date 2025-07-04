import { createContext, useContext,useState,useEffect } from "react"


const AuthContext =createContext();

//prop
export const AuthProvider = ({children}) => {
    //state
    const[user, setUser] = useState(() => {
        const storeUser = localStorage.getItem("user");
        return storeUser ? JSON.parse(storeUser):null;

                
    });
    const login =(userData,token) =>{
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token",token);

    };
    const logout =() =>{
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}

        </AuthContext.Provider>

    );
};
export const useAuth = () => useContext(AuthContext);