import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext(null);


export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState();
    const [loading,setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();
    // condt fscr = new FacebookAuthProvider()

    const loginWithGooglePopup =()=>{
    return signInWithPopup(auth,googleAuthProvider);

    }

    googleAuthProvider.setCustomParameters({
        prompt:'select_account'//prompt user to select accout 
    })

    const logout =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        return onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false);
        },[]);

    })

    const value = {
        currentUser,
        loginWithGooglePopup,
        logout
    }

    return(
       <AuthContext.Provider value={value}>
        {!loading && children}
       </AuthContext.Provider>
    )


}