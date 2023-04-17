const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const add_notification = (state = initialState, {type,payload}) => {
    switch(type){
        case "NOTIFICATION_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "NOTIFICATION_SUCCESS":
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "NOTIFICATION_ERROR":
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

export default add_notification;
