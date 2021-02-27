const initialState = {
    products: []
};

const wishlistReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                products: [
                    ...state.products,
                    action.product
                ]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.product.id)
            }
        default:
            return state
    }
}

export default wishlistReducer