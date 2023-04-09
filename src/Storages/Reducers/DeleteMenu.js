const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const delete_menu = (state = initialState, {type,payload}) => {
    switch(type){
        case "DELETE_MENU_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "DELETE_MENU_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "DELETE_MENU_ERROR":
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

export default delete_menu;
