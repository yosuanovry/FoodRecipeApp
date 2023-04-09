const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const AuthRegister = (state = initialState, {type,payload}) => {
    switch(type){
        case "REGISTER_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "REGISTER_ERROR":
            return {
            ...state,
            data:payload,
            isLoading:false,
            isError:true,
            isSuccess:false
        }
        default:
            return state
    }
}

export default AuthRegister;
