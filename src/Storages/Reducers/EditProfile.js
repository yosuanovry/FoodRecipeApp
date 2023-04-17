const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const edit_user = (state = initialState, {type,payload}) => {
    switch(type){
        case "EDIT_USER_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "EDIT_USER_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "EDIT_USER_ERROR":
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

export default edit_user;
