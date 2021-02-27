
const addToWishlist = (productObject) => {
    return {
        type: "ADD_TO_WISHLIST",
        product: productObject
    }
}

const removeFromWishlist = (productObject) => {
    return {
        type: "REMOVE_FROM_WISHLIST",
        product: productObject
    }
}

export default {
    addToWishlist,
    removeFromWishlist
}