import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Product, { iProduct } from './Product';
import './Ecommerce.css'
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
// import { getCartItems } from '../../Redux/cartReducer';
import { useAppSelector } from '../../Redux/hooks';
import { getCartItems } from '../../Redux/cartSlice';
import Price from './components/Price';
import CountIndicator from './components/CountIndicator';
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateProductHandler, removeProductHandler } from './utils';
import Navbar from './components/Navbar';
import AuthButtons from './components/AuthButtons';

export interface iCartItems {
  [id: number]: iProduct & { count: number };
}

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding:5rem 2% 2%;

.item-title{
  font-size: 18px;
  font-weight:550;
}

  .cart-item-img {

    object-fit: contain;
    height: 100px;
    width: 100px;

    .img{
      height: 100px;
      max-width: 100%;
    }
  }


  .item-price{
    align-self: center;
    padding-bottom:1.5%;
  }

  .delete-cta{
    align-self: center;
    margin:0 5% 2%;

    &:hover{
      color: red;
      background-color: #ccc;
      border-radius: 4px;
      padding:1px;
    }
  }
`

const CartItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #cccccc;
  width: 80%;
  margin-left: 3%;
`

const AddSubtractContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const CartHeader = styled.div`
padding:1%;
 border-bottom: 1px solid #cccccc;
    .title {
    font-size: 24px;
    font-weight: 600;
  }

`

const CartCtaContainer = styled.div`
  
`


let i = 0;
const Cart = () => {
  const [cartItemss, setCartItems] = useState<iCartItems>({
    1: {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "sku": "9EN8WLT2",
      "discountPercentage": 12.96,
      "rating": 4.69,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": ["https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"],
      "count": 2
    },
    2: {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "sku": "9EN8WLT2",
      "discountPercentage": 12.96,
      "rating": 4.69,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": ["https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"],
      "count": 2
    }
  });
  const [cartTotalValue, setCartTotalValue] = useState('0');
  const cartItems = useAppSelector(getCartItems)
  const ct = useRef(0)


  useEffect(() => console.log(cartItems), [cartItems])

  const cartTotal: number = useMemo(() => Object.values(cartItems).reduce((accumulator, cartItem) => {
    return accumulator + (cartItem.price * cartItem.count)
  }, 0.0), [cartItems])


  useEffect(() => {
    console.log(cartTotal)
    if(cartTotal === 0) setCartTotalValue('0')

    let interval = cartTotal && setInterval(() => {
      if (Math.round(ct.current) === Math.round(cartTotal)) {
        setCartTotalValue(cartTotal.toFixed(2))
        clearInterval(interval)
        return;
      }
      if (ct.current < cartTotal) ct.current += (cartTotal / 375); else ct.current -= (cartTotal / 375)
       setCartTotalValue(ct.current.toFixed(2))
    }, 8)
  }, [cartTotal, cartItems])


  return (
    <>
      <Navbar />
      <CartItemsContainer className='cart_items_container_m g05-m'>
        <CartHeader className='fl ac js'>
          <div className="title">Cart</div>
          <Price text='Total' value={cartTotalValue} />
        </CartHeader>
        {cartItems && Object.entries(cartItems).map(cartItem => {
          return <CartItemWrapper className='fl ac cart-item-wrapper' key={cartItem[1].id}>
            <div className="cart-item-img">
              <img src={cartItem[1].images[0]} />
            </div>
            <div className='fl fl-c'>
              <div className="item-title">{cartItem[1].title}</div> 
            </div> 
            <CountIndicator product={cartItem[1]} cartItems={cartItems} />
            <Price className='item-price price-subtotal' text='sub total' value={cartItem[1].price * cartItem[1].count} />
            <RiDeleteBin6Line className='cp delete-cta' onClick={() => removeProductHandler(cartItem[1].id, cartItems)} size={32} />
          </CartItemWrapper>
        })}
        {(Object.keys(cartItems).length > 0) && <CartCtaContainer>
          <AuthButtons title1='Check out' title2='Buy More' actionPath1='order-placed' actionPath2='/e-commerce/products' />
        </CartCtaContainer>}
      </CartItemsContainer>
    </>);
}


export default Cart;