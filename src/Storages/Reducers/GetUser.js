const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const get_userByEmail = (state = initialState, {type,payload}) => {
    switch(type){
        case "GET_USERBYEMAIL_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "GET_USERBYEMAIL_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "GET_USERBYEMAIL_ERROR":
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

export default get_userByEmail;
