import type {ActionType as Action} from 'typesafe-actions';
import type { Dispatch, ThunkAction } from '@reduxjs/toolkit';
import {action} from 'typesafe-actions';
import { RootState } from './store';
import { iCartItems } from '../pages/Ecommerce/Cart';

export enum ActionType {
    // addToCart = 'addToCart',
    // removeFormCart = 'removeFormCart',
    setCartItems = 'setCartItems',
    setTotal= 'setTotal'
}

// const addToCart = (id: number) => action(ActionType.addToCart, {id});
// const removeFromCart = (id: number) => action(ActionType.removeFormCart, {id});
const setCartItems = (cartItems: iCartItems) => action(ActionType.setCartItems,{cartItems});
const setTotal = (total:number) => action(ActionType.setTotal,{total});

// const getCartItems = (): ThunkAction<void, RootState, unknown, Action<iCartItems>> => (dispatch:Dispatch) => {
//     dispatch(setCartItems(setCartItems));
// };

export const uiActions = {
    // addToCart,
    // removeFromCart,
    setCartItems,
    setTotal
};


export type IcartAction = Action<typeof uiActions>;