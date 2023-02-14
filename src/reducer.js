export const initialState = {
    order: [],
    user: null
}

export const getBasketTotal = 1000;


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                // used for user login detail
                ...state,
                user: action.user
            }
        
        case "ORDER_TRANSPOTATION":
            return{
                ...state,
                order:[...state.order, action.item]
            }
        case "REMOVE_ORDER":
            const index = state.order.findIndex(
                (basketItem) => basketItem.cName === action.cName && basketItem.mobileNo === action.mobileNo &&  basketItem.orderType === action.orderType
            );
            console.log('The indexis >>>', index)
            let newOrder = [...state.order];

            if (index >= 0){
                newOrder.splice(index, 1);
            }
            else{
                console.warn('cant remove product (id: ${action.orderType} ) as its not in order list !')
            }

            return{
                ...state,
                order: newOrder
            }

        default:
            return state;
    }
}

export default reducer;