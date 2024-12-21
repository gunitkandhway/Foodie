/* eslint-disable react/prop-types */
import React from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    localStorage.removeItem("genius-token");
    return signOut(auth);
  };

  // update your profile
  

  
  const updateUserProfile = async (name, photoURL) => {
    try {
      console.log(photoURL)
      const user = auth.currentUser;
      if (!user) {
        throw new Error("No user is currently logged in.");
      }
  
      // Validate photoURL: Must be a valid string or an empty value
      if (photoURL && typeof photoURL !== "string") {
        throw new Error("Invalid photoURL: Must be a string.");
      }
  
      if (photoURL && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(photoURL)) {
        throw new Error("Invalid photoURL: Must be a valid URL.");
      }
  
      // Proceed with updating the profile
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL || null, // Send null if no photoURL is provided
      });
  
      console.log("User profile updated successfully:", {
        displayName: name,
        photoURL: photoURL,
      });
  
      // Update local user state
      setUser({
        ...user,
        displayName: name,
        photoURL: photoURL,
      });
    } catch (error) {
      console.error("Error updating user profile:", error.message);
      throw error;
    }
  };
  
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      if(currentUser){
        const userInfo ={email: currentUser.email}
      axios.post("http://localhost:3000/jwt",userInfo)
        .then((response) => {
          //console.log(response.data.token);
          if(response.data.token){
       localStorage.setItem("access-token", response.data.token)
              }
            })
      } else{
         localStorage.removeItem("access-token")
      }   
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    signUpWithGmail,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
