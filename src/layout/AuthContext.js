import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading,setloading]= useState(true)
  const auth = getAuth(app);
  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const existUser = (email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setloading(false)
    });
    return () => unsubscribe();
  }, [auth]);
const updateUser = profile =>{
    setloading(true)
return updateProfile(auth.currentUser,profile)
}
const logout = ()=>{
    setloading(true)
    return signOut(auth)
}
  const authInfo = {
    user,
    createUser,
    existUser,
    updateUser,
    logout,
    loading
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
