import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import {useLocation, Navigate} from 'react-router-dom'
// import {LoadingSpinner} from "react-Loading"

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
    if(loading){
        return(
            //<LoadingSpinner/>
            <h2>Hello Gunit</h2>
        )
    }
if(user){
    return children;        
}        

  return (
    <Navigate to="/signup" state={{from:location}} replace></Navigate>
  )
}

export default PrivateRouter