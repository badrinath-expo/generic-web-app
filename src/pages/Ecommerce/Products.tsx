import React, { useEffect, useState } from 'react';
import './Ecommerce.css';
import { fetchProducts } from '../../apis/ecommerce';
import Product, { iProduct } from './Product';
import styled from 'styled-components';
import cart_icon from '../../assets/cart.png';
import close_icon from '../../assets/close.png';
import css from 'classnames';
import { useSelector } from 'react-redux';
import {store} from '../../Redux/store';
// import { getCartItems } from '../../Redux/cartReducer';
import { iCartItems } from './Cart';
import { uiActions } from '../../Redux/action';
import { addProductHandler, updateProductHandler } from './utils';
import { useAppSelector } from '../../Redux/hooks';
import cartSlice, { getCartItems } from '../../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from '../../components/Loader';
const EcommerceWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 1rem; */
`;

const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = React.useState<iProduct[] | null>(null);
  // const cartItems = useSelector<RootState, iCartItems>(state => getCartItems(state.UI))
  const cartItems = useAppSelector(getCartItems)
  const [loading,setLoading] = useState(true)

  useEffect(() => {

    fetchProducts().then((data) => setProducts(data.products as iProduct[])).catch(err => console.log(err)).finally(() => setLoading(false))
    return () => { }
  }, [])


  return (
    <EcommerceWrapper className='fl jc'>
      <Navbar/>
   
      <div className='fl wr g1 p1 products-wrapper'>
      {loading ? <Loader/> :<> 
      {products && products?.map((product: iProduct) => <Product product={product} key={product.id} count={(cartItems && cartItems[product.id]) ? (cartItems[product.id]?.count) : 0} />)}
       </>}
        </div>
    
      {/* <img className='cart-icon' onClick={() => navigate('/cart')} src={cart_icon} alt="cart" width={280} height={50} /> */}
    </EcommerceWrapper>
  )
};

export default Products;