import { uiActions } from "../../Redux/action";
import { setCartItems, setOrders, setWishlist } from "../../Redux/cartSlice";
import { store } from "../../Redux/store";
import { iCartItems, PageTypes } from "./Cart";
import { iProduct } from "./Product";

export const addProductHandler = (product: iProduct, { ...cartItems }: iCartItems, pageType?: PageTypes) => {
    let ci = structuredClone(cartItems)
    if (cartItems && cartItems[product.id]) {
        ci[product.id].count++;
    } else {
        ci[product.id] = { ...product, count: 1 };
    }
    pageType === PageTypes.wishlist ?  store.dispatch(setWishlist(ci)):store.dispatch(setCartItems(ci));
}


export const updateProductHandler = (product: iProduct, { ...cartItems }: iCartItems, pageType?: PageTypes) => {
    if (cartItems && cartItems[product.id]) {
        let ci = structuredClone(cartItems);
        ci[product.id].count--;
        if (ci[product.id].count === 0) delete ci[product.id];
        pageType === PageTypes.wishlist ? store.dispatch(setWishlist(ci)) : store.dispatch(setCartItems(ci))
    }
}
export const removeProductHandler = (id: number, cartItems: iCartItems, pageType?: PageTypes) => {
    let ci = structuredClone(cartItems);
    delete ci[id]
    pageType === PageTypes.wishlist ? store.dispatch(setWishlist(ci)) : store.dispatch(setCartItems(ci))
}