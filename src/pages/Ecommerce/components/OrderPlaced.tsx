import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from "react-icons/fa";
import { AuthButton } from './AuthButtons';
import { useNavigate } from 'react-router-dom';
const OrderPlacedContainer = styled.div`
  height: 100vh;
  gap:0.5rem;

 .order_placed_title{
  font-size:24px;
  font-weight: 600;
 }

 .circle-wrapper{
  border: 1rem solid #2f875952;
  border-radius: 50%;
  
 }

 @keyframes circle-animation{
    0% {
      scale: 0.8;
      border-width: 0px;
    }

    100% {
      scale: 1;
      border-width:1rem;
    }
  }

  .animate-circle {
    animation:circle-animation  2s infinite;
  }
`
const OrderPlaced = () => {
  const navigate = useNavigate()
  return (
    <OrderPlacedContainer className='fl fl-c ac jc h100-m'>
      <FaCheckCircle className='circle-wrapper animate-circle' size={150} color='#2f8759'/>
      <div style={{paddingTop:30}}></div>
      <div className="order_placed_title">Order Placed Successfully</div>
      <div>Order ID : <code>b76b-7f537b7a9dd8</code></div> 
      <AuthButton className='m-t-50-percent-m' title='Shop more' onClick={() => navigate('/e-commerce')  }/>
    </OrderPlacedContainer>
  )
}

export default OrderPlaced