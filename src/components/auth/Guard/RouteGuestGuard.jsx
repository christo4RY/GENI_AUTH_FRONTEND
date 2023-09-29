import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RouteGuestGuard = ({ children }) => {
    const { token } = useSelector((state) => state.authToken)
    if (token) {
        return <Navigate to="/admin/products"/>
    }else{
        return children
    }
}

export default RouteGuestGuard
