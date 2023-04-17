const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const Auth_Verify = (state = initialState, {type,payload}) => {
    switch(type){
        case "VERIFY_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "VERIFY_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "VERIFY_ERROR":
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

export default Auth_Verify;
