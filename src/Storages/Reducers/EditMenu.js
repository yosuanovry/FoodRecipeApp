const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const edit_menu = (state = initialState, {type,payload}) => {
    switch(type){
        case "EDIT_MENU_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "EDIT_MENU_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "EDIT_MENU_ERROR":
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

export default edit_menu;
