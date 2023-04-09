const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const add_menu = (state = initialState, {type,payload}) => {
    switch(type){
        case "ADD_MENU_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "ADD_MENU_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "ADD_MENU_ERROR":
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

export default add_menu;
