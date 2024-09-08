import React, { FC } from 'react'
import { styled } from 'styled-components';
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Ecommerce.css'
import { iCartItems } from './Cart';
import { IcartAction } from '../../Redux/action';
export interface iProduct {
  id: number,
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  thumbnail: string;
  images: string[];
  category: any; //string;
  count?: number;
  sku?:string;
}

const ProductContainer = styled.div`
  padding: 1em;
  border-radius: 4px;
  width:min(100%,250px);
  box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
  height: 320px;
  position: relative;

  &:hover{
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

.title {
  font-size: 16px;
  font-weight: 700;
  padding-top: 0.5em;
  font-family: "Open Sans", sans-serif;

}

.description {
  font-size: 14px;
  font-weight:600;
  padding: 0.25em 0;
  font-family: "Open Sans", sans-serif;
  color:#666666;
}

img,.img-container{
  width: 180px;
  height:180px;
  object-fit: contain;
  max-width: 100%;
}


`

const LineDiv = styled.div`
  height: 1px;
  width: 100%;
  border-bottom:1px solid #c1c1c1;
  margin-top:1rem;
  position: relative;
`
const WishlistIconWrapper = styled.div`
  position: absolute;
  right:5px;
  bottom:7px;
`

const RatingContainer = styled.div`
  border:1px solid #666666;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding:0 0.25em;
  border-radius: 4px;
  right: 12px;
  top:12px;
  position: absolute;
  span{
    color:#666666;
  }
`



const Product: FC<{ product: iProduct, count: number; }> = ({ product, count }) => {
  const navigate = useNavigate()
  const handleProductClick = () => {
    navigate(`/product/${product.id}`)
  }
  return (
    <ProductContainer className='fl fl-c m-h-auto-m products-container-m' key={product.id} onClick={handleProductClick}>
      <RatingContainer><span>{product.rating.toString().slice(0, 3)}</span><FaStar color='#4D4D4D' /></RatingContainer>
      <div className="img-container"><img src={product.images[0]} alt={product.title} /></div>
      <div className="fl fl-c fl1">
        <LineDiv>
          <WishlistIconWrapper><FaRegHeart className='heart-icon' /></WishlistIconWrapper>
        </LineDiv>
        <div className='title'>{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</div>
        <div className='description'>{product.description.length > 25 ? product.description.slice(0, 25) + "..." : product.description}</div>
        <div className="price pt-mono-regular">$<span className='price-value'>{product.price}</span></div>
      </div>
    </ProductContainer>
  )
}

export default Product;