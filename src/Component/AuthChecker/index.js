import React from "react";
import { NativeRouter } from "react-router-native";
import { useDispatch,useSelector } from 'react-redux';

const AuthChecker = ({children}) => {
    const isAuth = useSelector((state) => state.AuthLogin.data.token)

    if(!isAuth){
        return(
            <NativeRouter to="Login" replace="true" />
        )
    }
    return children
}

export default AuthChecker
