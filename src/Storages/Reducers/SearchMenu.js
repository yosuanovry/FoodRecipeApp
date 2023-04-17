const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const search_menu = (state = initialState, {type,payload}) => {
    switch(type){
        case "SEARCH_MENU_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "SEARCH_MENU_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "SEARCH_MENU_ERROR":
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

export default search_menu;
