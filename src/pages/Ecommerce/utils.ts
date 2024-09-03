import { uiActions } from "../../Redux/action";
import { setCartItems } from "../../Redux/cartSlice";
import { store } from "../../Redux/store";
import { iCartItems } from "./Cart";
import { iProduct } from "./Product";

export const addProductHandler = (product: iProduct, { ...cartItems }: iCartItems) => {
    if (cartItems && cartItems[product.id]) {
        let ci = structuredClone(cartItems)
        ci[product.id].count++;
        store.dispatch(setCartItems(ci));
    } else {
        const ci = { ...cartItems }
        ci[product.id] = { ...product, count: 1 }
        store.dispatch(setCartItems(ci))

    }
}


export const updateProductHandler = (product: iProduct, { ...cartItems }: iCartItems) =>{
if(cartItems && cartItems[product.id]){
    let ci = structuredClone(cartItems);
ci[product.id].count--;
if(ci[product.id].count===0) delete ci[product.id];
store.dispatch(setCartItems(ci))
}
}
export const removeProductHandler = (id:number,cartItems:iCartItems) =>{
    let ci= structuredClone(cartItems);
    delete ci[id]
    store.dispatch(setCartItems(ci))
}