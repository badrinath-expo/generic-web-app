import { FC } from "react";
import { iProduct } from "../Product";
import { iCartItems } from "../Cart";
import styled from "styled-components";
import { addProductHandler,updateProductHandler } from "../utils";

interface iCountIndicator{
product: iProduct;
cartItems:iCartItems;
// addProductHandler: (product:iProduct,cartItems:iCartItems) => void;
// removeProductHandler: (product:iProduct,cartItems:iCartItems) => void;
}


const CountIndicatorWrapper =  styled.div `
align-self: center;
padding:0% 5%;
    .line {
      background-color: #B3B3B3;
      height: 1px;
      border: 1px solid #B3B3B3;
      margin: 5px auto;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    }
  
    .line-1 {
      width: 10px;
    }
  
    .line-2 {
      width: 20px;
    }
  
    .line-3 {
      width: 30px;
    }
  
    .count-value {
      font-weight: 600;
    }
  `
const CountIndicator:FC<iCountIndicator> = ({product,cartItems}) => {
    return (
      <CountIndicatorWrapper className="fl fl-c ac count-wrapper">
        <div onClick={() => product && addProductHandler(product, cartItems)}>
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
        </div>
        <div className="count-value">{Object.keys(cartItems).length && product && cartItems[product.id]?.count || 0}</div>
        <div onClick={() => product && updateProductHandler(product, cartItems)}>
          <div className="line line-3" />
          <div className="line line-2" />
          <div className="line line-1" />
        </div>
      </CountIndicatorWrapper>
    );
  }


  export default CountIndicator;