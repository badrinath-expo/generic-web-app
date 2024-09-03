import { FC } from "react";
import styled from "styled-components";

interface iPrice {
    className?: string;
    text?: string;
    value: string | number;
  }

  const PriceContainer = styled.div`
  width: max-content;
  white-space:nowrap;
  .text {
    padding: 2px;
    margin-right: 1rem;
    border-right: 2px solid #a0a0a0;
    padding-right: 1.5rem;
    color: #666666;
  }

  .price-value {
    font-size: 32px;
  }
`;

const Price: FC<iPrice> = ({ text, value, className }) => {
    return (
      <PriceContainer className={`${className}`}>
        <span className="text">{(text && text.toUpperCase()) || "PRICE"}</span>{" "}
        <span className="price">
          $<span className="price-value">{value || "0.0"}</span>
        </span>
      </PriceContainer>
    );
  };

  export default Price;