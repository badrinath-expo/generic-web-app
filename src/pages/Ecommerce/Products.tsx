import React, { useEffect, useState } from 'react';
import './Ecommerce.css';
import { fetchProducts, searchProduct } from '../../apis/ecommerce';
import Product, { iProduct } from './Product';
import styled from 'styled-components';
import cart_icon from '../../assets/cart.png';
import close_icon from '../../assets/close.png';
import css from 'classnames';
import { useSelector } from 'react-redux';
import {store} from '../../Redux/store';
import { useAppSelector } from '../../Redux/hooks';
import cartSlice, { getCartItems } from '../../Redux/cartSlice';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from '../../components/Loader';

const EcommerceWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = React.useState<iProduct[] | null>(null);
  const cartItems = useAppSelector(getCartItems)
  const [loading,setLoading] = useState(true)
  const [searchParams] = useSearchParams();
  const category = searchParams?.get('category') as string;
  const searchQuery = searchParams?.get('searchQuery') as string;

  console.log(searchParams?.get('category'),'search params')
  console.log(searchParams?.get('searchQuery'),'search params')

  useEffect(() => {
    const fetchMethod = searchQuery ? searchProduct(searchQuery) : fetchProducts({category}) 
    fetchMethod.then((data) => setProducts(data.products as iProduct[])).catch(err => console.log(err)).finally(() => setLoading(false))
    return () => { }
  }, [category,searchQuery])

  return (
    <EcommerceWrapper className='fl jc'>
      <Navbar/>
      <div className='fl wr g1 p1 products-wrapper g05-m jc'>
      {loading ? <Loader/> :<> 
      {products && products?.map((product: iProduct) => <Product product={product} key={product.id} count={(cartItems && cartItems[product.id]) ? (cartItems[product.id]?.count) : 0} />)}
       </>}
        </div>
    
      {/* <img className='cart-icon' onClick={() => navigate('/cart')} src={cart_icon} alt="cart" width={280} height={50} /> */}
    </EcommerceWrapper>
  )
};

export default Products;