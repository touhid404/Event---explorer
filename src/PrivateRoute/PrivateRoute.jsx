import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import GlobalLoader from './../pages/Loader/GlobalLoader';
import { AuthContext } from './../provider/AuthContext';
const PrivateRoute = ({children}) => {

    const location = useLocation();
    const {user, loading } = use(AuthContext);
    if(loading){
         return <GlobalLoader></GlobalLoader>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    
    }
    return children;
};

export default PrivateRoute;