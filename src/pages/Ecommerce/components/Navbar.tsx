import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import css from "classnames";
import Search from "./Search";
import { SlClose } from "react-icons/sl";
import cart_img from "../../../assets/bx-cart-alt.svg.png";
import { getCartItems } from "../../../Redux/cartSlice";
import { useAppSelector } from "../../../Redux/hooks";
import dollar_icon from "../../../assets/dollar_icon.svg";
// import logo from "../../../assets/logo.png";
import './Navbar.css';
import logo from "../../../assets/Designer.png";
import { IoMenu } from "react-icons/io5";
const NavbarContainer = styled.div`

  background: rgba(255, 255, 255, 0.336);
    box-shadow: 0 15px 10px rgba(148, 148, 148, .1);
    -webkit-backdrop-filter: blur(6.3px);
    backdrop-filter: blur(6.3px);
  border:1px solid #ccc;
  width: 100%;

  padding: 8px 1rem;
  position:fixed;
  z-index: 99;

  .logo {
    object-fit: contain;
    width:60px;
  }

  .contact-section {
    font-size: 18px;
    font-weight: 600;
    padding: 5px;
    align-items: center;

    .separator {
      width: 1px;
      height: 21px;
      background-color: #232323;
      margin: 0 0.8rem;
    }

    .txt {
      &:hover {
        color: #9e9e9e;
        cursor: pointer;
      }
    }
  }
`;

const NavActionsContainer = styled.div`
  /* margin-top: auto; */
`;

const NavItemContainer = styled.div`
  padding: 8px 1rem 2px;
  text-align: center;
width: max-content;
margin:1px auto;
  .title {
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }

  .active-title {
    color: #050505;
    font-weight: 650;
  }

  cursor: pointer;
  .indicator {
    background-color: #000000;
    width: 2rem;
    height: 4px;
    margin: 2px auto 0;
  }

  &:hover {
    .title,
    .indicator {
      color: #010101;
    }
  }
`;

const BalanceWrapper = styled.div`
  background-color: rgba(36, 36, 36, 0.247);
  border-radius: 6px;
  height: fit-content;
  width: max-content;
  cursor: pointer;
  .title {
    color: #000000;
    padding: 2px 6px;
    font-size: 12px;
    text-align: center;
  }

  .value {
    background-color: #1c1c1c;
    text-align: center;
    border-radius: inherit;
    font-size: 18px;
    font-weight:550;
    color: #ffffff;
    padding: 0px 6px;
    align-items: center;
    gap: 0.1rem;
    box-shadow: 0px 5px 12px 0px rgba(1, 1, 1, 0.25);

    .dollar { 
      font-family: sans-serif;
      padding-top: 6px;
      object-fit: contain;
    }
  }

  &:hover{
    box-shadow: 0px 10px 12px 0px rgba(1, 1, 1, 0.25);
  }
`;

const CartButtonContainer = styled.div`

.cart-icon-part{
  position: relative;
  margin-top: 4px;
  width: max-content;
}
  .cart-count {
    position: absolute;
    top: -10px;
    right: -3px;
    background-color: aliceblue;
    padding: 0 6px;
    font-weight: 600;
    font-size: 14px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .cart-img{

  &:hover{
    filter: drop-shadow(0px 10px 12px 0px rgba(1, 1, 1, 0.25));
  }
}


.cart-title{
  display:none;
}
`;

interface iNavItem {
  id: number;
  title: string;
  isActive: boolean;
}
const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState<number>(0);
  const cartItems = useAppSelector(getCartItems);
  const [showMenuButton, setShowMenuButton] = useState(true);

  const navItems = useMemo(
    () => [
      {
        title: "Apparel",
        to: "/Apparel",
      },
      {
        title: "Accessories",
        to: "/Apparel",
      },
      {
        title: "Hats/Gloves",
        to: "/Apparel",
      },
    ],
    []
  );

  const NavItem: FC<iNavItem> = ({ title, isActive, id }) => {
    return (
      <NavItemContainer className="menu-item-separator" onClick={() => setActiveNavItem(id)}>
        <div className={css("title", { "active-title": isActive })}>
          {title}
        </div>
        {isActive && <div className="indicator" />}
      </NavItemContainer>
    );
  };

  const Balance: FC<{ value: number }> = ({ value }) => {
    return (<div className="fl-m m-h-auto-m  ac-m g1">
      <BalanceWrapper className="mt-1-m">
        <div className="title">Balance</div>
        <div className="value fl">
          <span className="dollar">
            <img src={dollar_icon} height={16} />
          </span>
          {value}
        </div>
      </BalanceWrapper>
      <span className="cw-title m-show wallet-title"> Wallet</span>
    </div>
    );
  };

  const CartButton: FC<{ cartCount: number }> = ({ cartCount }) => {
    return (
      <CartButtonContainer className="m-h-auto-m fl-m ac-m g1-m">
        <div className="cart-icon-part">
          <img className="cart-img" src={cart_img} width={40} height={40} />
          <div className="cart-count">{cartCount}</div>
        </div>
        <span className="cw-title m-show">Cart</span>
      </CartButtonContainer>
    );
  };

  return (
    <>
      <IoMenu size={32} className={css("menu_icon", { 'm-show': showMenuButton })} onClick={() => setShowMenuButton(false)} />
      <NavbarContainer className={css("fl g-1 fl-c-m navbar_container_m animate-this-element m-hide", { 'm-show': !showMenuButton })}>
        <div className="fl g1 fl-c-m">
          <SlClose className={css('close_icon', { 'm-show': !showMenuButton })} size={24} onClick={() => setShowMenuButton(true)} />
          <div className="fl">
            <img className="logo m-auto-m" src={logo} alt="" width={80} />
          </div>
          <NavActionsContainer className="fl fl-c-m g1-m">
            {navItems.map((navItem, index) => {
              return (
                <NavItem
                  id={index}
                  key={index}
                  isActive={index === activeNavItem}
                  title={navItem.title}
                />
              );
            })}
          </NavActionsContainer>
        </div>
        <div className="fl g1 m-l-auto fl-c-m m-h-auto-m">
          <Search
            className="search-box search_box-m m-hide"
            onSearch={(inputText: string) => {
              console.log(inputText);
            }}
          />
          <Balance value={100} />
          <CartButton cartCount={Object.keys(cartItems).length} />
          <div className="contact-section fl fl-c-m g1-m">
            <div className="txt">Contact Us</div>
            <div className="separator m-hide" />
            <div className="txt">FAQ</div>
          </div>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
