import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import css from "classnames";
import Search from "./Search";
import { SlClose } from "react-icons/sl";
import cart_img from "../../../assets/bx-cart-alt.svg.png";
import { getCartItems, isUserLogged } from "../../../Redux/cartSlice";
import { useAppSelector } from "../../../Redux/hooks";
import dollar_icon from "../../../assets/dollar_icon.svg";
// import logo from "../../../assets/logo.png";
import "./Navbar.css";
import logo from "../../../assets/Designer.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthButton } from "./AuthButtons";
import { BsChevronLeft } from "react-icons/bs";
const NavbarContainer = styled.div`
  background: rgba(255, 255, 255, 0.336);
  box-shadow: 0 15px 10px rgba(148, 148, 148, 0.1);
  -webkit-backdrop-filter: blur(6.3px);
  backdrop-filter: blur(6.3px);
  border: 1px solid #ccc;
  width: 100%;

  padding: 8px 1rem;
  position: fixed;
  z-index: 99;

  .logo {
    object-fit: contain;
    width: 60px;
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
  margin: 1px auto;
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
    /* width: 2rem; */
    width: 4px;
    border-radius: 50%;
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
    font-weight: 550;
    color: #ffffff;
    padding: 0px 6px;
    align-items: center;
    gap: 0.1rem;
    box-shadow: 0px 2px 4px 0px rgba(1, 1, 1, 0.25);

    .dollar {
      font-family: sans-serif;
      padding-top: 6px;
      object-fit: contain;
    }
  }

  &:hover {
    box-shadow: 0px 4px 5px 0px rgba(1, 1, 1, 0.25);
  }
`;

const CartButtonContainer = styled.div`
  .cart-icon-part {
    position: relative;
    margin-top: 4px;
    width: max-content;
  }
  .cart-count {
    position: absolute;
    top: -9px;
    right: -4px;
    background-color: aliceblue;
    padding: 0 6px;
    font-weight: 600;
    font-size: 14px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .cart-img {
    &:hover {
      filter: drop-shadow(0px 10px 12px 0px rgba(1, 1, 1, 0.25));
    }
  }

  .cart-title {
    display: none;
  }
`;

interface iNavItem {
  id: number;
  title: string;
  path: string;
}
const Navbar = () => {
  const cartItems = useAppSelector(getCartItems);
  const [showMenuButton, setShowMenuButton] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogged = useAppSelector(isUserLogged);

  const navItems = useMemo(
    () => [
      {
        title: "Home",
        to: "/e-commerce",
      },
      {
        title: "Products",
        to: "/e-commerce/products",
      }, 
      // {
      //   title: "Orders",
      //   to: "/orders",
      // },
      {
        title: "Wishlist",
        to: "/wishlist",
      }
    ],
    []
  );

  useEffect(() => {
    setShowMenuButton(true);
  }, [location]);

  const NavItem: FC<iNavItem> = useCallback(
    ({ title, id, path }) => {
      const isActive = location.pathname === path;
      return (
        <NavItemContainer
          className="menu-item-separator"
          onClick={() => navigate(path)}
        >
          <div className={css("title", { "active-title": isActive })}>
            {title}
          </div>
          {isActive && <div className="indicator m-hide" />}
        </NavItemContainer>
      );
    },
    [location]
  );

  const Balance: FC<{ value: number }> = ({ value }) => {
    return (
      <div className="fl-m m-h-auto-m  ac-m g1">
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
      <CartButtonContainer
        className="cp m-h-auto-m fl-m ac-m g1-m"
        onClick={() => navigate("/cart")}
      >
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
      <div className="fl al-s d-hide m-flex nav-bg ac">
        <IoMenu size={32} className={css("menu_icon", { "m-show": showMenuButton })} onClick={() => setShowMenuButton(false)} />
        <img className="logo logo-nav-m cp" src={logo} alt="" width={80} onClick={() => navigate("/e-commerce")} />
        <Search className="search-box search_box-m" onSearch={(inputText: string) => { inputText && navigate(`/e-commerce/products?searchQuery=${inputText}`) }} />
      </div>
      <NavbarContainer className={css("fl g-1 fl-c-m navbar_container_m animate-this-element m-hide", { "m-show": !showMenuButton })}>
        <div className="fl g1 fl-c-m">
          <BsChevronLeft
            size={24}
            className={css("back_icon", { "m-show": !showMenuButton })}
            onClick={() => setShowMenuButton(true)}
          />
          <div className="fl" onClick={() => navigate("/e-commerce")}>
            <img className="logo logo-m m-auto-m cp" src={logo} alt="" width={80} />
          </div>
          <NavActionsContainer className="fl fl-c-m g1-m ac">
            {navItems.map((navItem, index) => {
              return (<NavItem id={index} key={index} title={navItem.title} path={navItem.to} />);
            })}
          </NavActionsContainer>
        </div>
        <div className="fl g1 m-l-auto fl-c-m m-h-auto-m ac">
          <Search className="search-box search_box-m m-hide" onSearch={(inputText: string) => { inputText && navigate(`/e-commerce/products?searchQuery=${inputText}`) }} />
          <Balance value={100} />
          <CartButton cartCount={Object.keys(cartItems).length} />
          <div className="contact-section fl fl-c-m g1-m">
            <div className="txt">Contact Us</div>
            <div className="separator m-hide" />
            <div className="txt">FAQ</div>
            {isLogged && <AuthButton className="hide m-show" title="Login" />}
          </div>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
