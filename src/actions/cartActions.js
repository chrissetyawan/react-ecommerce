
const addToCart = (productObject) => {
    return {
        type: "ADD_TO_CART",
        payload: productObject
    }
}

export default {
    addToCart
}