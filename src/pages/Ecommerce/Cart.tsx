import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Product, { iProduct } from './Product';
import './Ecommerce.css'
import styled from 'styled-components';
import css from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
// import { getCartItems } from '../../Redux/cartReducer';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { getCartItems, getWishlist, setLoading } from '../../Redux/cartSlice';
import Price from './components/Price';
import CountIndicator from './components/CountIndicator';
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateProductHandler, removeProductHandler } from './utils';
import Navbar from './components/Navbar';
import AuthButtons from './components/AuthButtons';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

export interface iCartItems {
  [id:number]: iProduct & { count: number };
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

export enum PageTypes{
  cart = '/cart',
  order ='/order',
  wishlist = '/wishlist'
}

let i = 0;
const Cart: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [pageType,setPageType]=useState<PageTypes>(PageTypes.cart)
  useEffect(()=>{
    console.log(location.pathname)
setPageType(location.pathname as PageTypes )
  },[location])
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
  const cartItems =useAppSelector(location.pathname === PageTypes.cart ?getCartItems:getWishlist)
  const ct = useRef(0)


  useEffect(() => console.log(cartItems), [cartItems])

  const cartTotal: number = useMemo(() => Object.values(cartItems).reduce((accumulator, cartItem) => {
    return accumulator + (cartItem.price * cartItem.count)
  }, 0.0), [cartItems])


  useEffect(() => {
    console.log(cartTotal)
    if (cartTotal === 0) setCartTotalValue('0')

    let interval = cartTotal && setInterval(() => {
      if (Math.round(ct.current) === Math.round(cartTotal)) {
        cartItems ? setCartTotalValue(cartTotal.toFixed(2)) : setCartTotalValue('0')
        clearInterval(interval)
        return;
      }
      if (ct.current < cartTotal) ct.current += (cartTotal / 375); else ct.current -= (cartTotal / 375)
      setCartTotalValue(ct.current.toFixed(2))
    }, 8)
  }, [cartTotal, cartItems])

  const pageTitle= useMemo(()=> {
    switch (pageType) {
      case PageTypes.wishlist:
        return 'Wishlist'
      case PageTypes.order:
        return 'Order'
      default:
        return 'Cart'
    }
},[pageType])

  const renderItems = useCallback(()=>{
   const isWislist = pageType === PageTypes.wishlist

    return  <>{cartItems && Object.entries(cartItems).map(cartItem => {
      return <CartItemWrapper className={css('fl ac cart-item-wrapper')} key={cartItem[1].id}>
        <div className={css("cart-item-img",{'cart-item-img-wl':isWislist })}>
          <img src={cartItem[1].images[0]} />
        </div>
        <div className='fl fl-c'>
          <div className="item-title">{cartItem[1].title} </div>
        </div>
        {!isWislist  && <CountIndicator className='m-l-auto' product={cartItem[1]} cartItems={cartItems} />}
        <Price className='item-price price-subtotal' text={isWislist?'price':'sub total'} value={(cartItem[1].price * cartItem[1].count).toFixed(2)} />
        <RiDeleteBin6Line className='cp delete-cta' onClick={() => removeProductHandler(cartItem[1].id, cartItems,pageType)} size={32} />
      </CartItemWrapper>
    })}</>
  },[cartItems,pageType])
  return (
    <>
      <Navbar />
      <CartItemsContainer className='cart_items_container_m g05-m fl1-ov-m'>
        <CartHeader className='fl ac js page-title-m'>
          <div className="title ac fl g0-5">{pageType===PageTypes.wishlist && <FaHeart color='#71342cd1' size={24}/>}{pageTitle}</div>
         {pageType!== PageTypes.wishlist && <Price text='Total' value={cartTotalValue} />}
        </CartHeader>
        <div className="fl fl-c-m fl1-ov-m">
          <div className='fl fl-c fl1 fl1-ov-m'>
           {renderItems()}
          </div>
          {pageType === PageTypes.cart && (Object.keys(cartItems).length > 0) && <CartCtaContainer className='cart-cta-btn-m ph-1-m'>
            <AuthButtons title1='Check out' title2='Buy More' actionPath1={() => {
              dispatch(setLoading(true))
              setTimeout(() => {
                dispatch(setLoading(false))
                navigate('order-placed')
              }, 500)
            }
            } actionPath2={() => navigate('/e-commerce/products')} />
          </CartCtaContainer>}
        </div>
      </CartItemsContainer>
    </>);
}


export default Cart;