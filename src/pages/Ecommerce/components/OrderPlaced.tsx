import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from "react-icons/fa";
const OrderPlacedContainer = styled.div`
  height: 100%;
  gap:0.5rem;

 .order_placed_title{
  font-size:24px;
  font-weight: 600;
 }
`
const OrderPlaced = () => {
  return (
    <OrderPlacedContainer className='fl fl-c ac jc'>
      <FaCheckCircle size={150} color='#2f8759'/>
      <div style={{paddingTop:30}}></div>
      <div className="order_placed_title">Order Placed Successfully</div>
      <div>Order ID : <code>b76b-7f537b7a9dd8</code></div>
    

    </OrderPlacedContainer>
  )
}

export default OrderPlaced