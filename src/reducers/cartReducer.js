const initialState = {
    products: []
};

const wishlistReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default wishlistReducer