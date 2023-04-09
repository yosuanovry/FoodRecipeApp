const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const get_menuUser = (state = initialState, {type,payload}) => {
    switch(type){
        case "GET_MENU_BYUSER_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "GET_MENU_BYUSER_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "GET_MENU_BYUSER_ERROR":
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

export default get_menuUser;
