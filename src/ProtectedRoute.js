import React from 'react'
// import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    
    if (!localStorage.getItem('token')) {
        
     window.location = '/'
    }
    console.log(localStorage.getItem('token'))
    return children;

}

export default ProtectedRoute