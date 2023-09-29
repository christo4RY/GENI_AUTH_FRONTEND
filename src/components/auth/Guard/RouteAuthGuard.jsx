import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RouteAuthGuard = ({ children }) => {
    const { token } = useSelector((state) => state.authToken)
    if (!token) {
        return <Navigate to="/login"/>
    }else{
        return children
    }
}

export default RouteAuthGuard
