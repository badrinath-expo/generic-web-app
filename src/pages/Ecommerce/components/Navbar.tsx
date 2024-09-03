import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import css from "classnames";
import Search from "./Search";
import cart_img from "../../../assets/bx-cart-alt.svg.png";
import { getCartItems } from "../../../Redux/cartSlice";
import { useAppSelector } from "../../../Redux/hooks";
import dollar_icon from "../../../assets/dollar_icon.svg";
import logo from "../../../assets/logo.png";
const NavbarContainer = styled.div`
  background-color: #1f1c30d1;
  box-shadow: 0px 10px 6.8px 0px rgba(1, 1, 1, 0.1);
  padding: 0.7rem 8px 0;
  border-radius: 1rem;
  margin: 8px auto;
  padding: 8px 1rem;
  position:fixed;
  z-index: 99;

  .logo {
    object-fit: contain;
    width: 100px;
  }

  .contact-section {
    color: #ccc;
    font-size: 18px;
    font-weight: 600;
    padding: 5px;

    .separator {
      width: 1px;
      height: 21px;
      background-color: #ccc;
      margin: 0 0.8rem;
    }

    .txt {
      &:hover {
        color: #e7e7e7;
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

  .title {
    font-size: 18px;
    font-weight: 500;
    color: #fafafa;
  }

  .active-title {
    color: #fafafa;
    font-weight: 650;
  }

  cursor: pointer;
  .indicator {
    background-color: #fefdfd;
    width: 2rem;
    height: 4px;
    margin: 2px auto 0;
  }

  &:hover {
    .title,
    .indicator {
      color: #bebebe;
    }
  }
`;

const BalanceWrapper = styled.div`
  background-color: rgba(209, 208, 208, 0.23);
  border-radius: 6px;
  height: fit-content;
  .title {
    color: #fff;
    padding: 2px 6px;
    font-size: 12px;
    text-align: center;
  }

  .value {
    background-color: #e6e6e6;
    text-align: center;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #8c8c8c;
    padding: 2px 6px;
    align-items: center;
    gap: 0.1rem;

    .dollar {
      color: #d28651;
      font-family: sans-serif;
      padding-top: 6px;
      object-fit: contain;
    }
  }
`;

const CartButtonContainer = styled.div`
  position: relative;
  margin-top: 4px;

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
`;

interface iNavItem {
  id: number;
  title: string;
  isActive: boolean;
}
const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState<number>(0);
  const cartItems = useAppSelector(getCartItems);

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
      <NavItemContainer onClick={() => setActiveNavItem(id)}>
        <div className={css("title", { "active-title": isActive })}>
          {title}
        </div>
        {isActive && <div className="indicator" />}
      </NavItemContainer>
    );
  };

  const Balance: FC<{ value: number }> = ({ value }) => {
    return (
      <BalanceWrapper>
        <div className="title">Balance</div>
        <div className="value fl">
          <span className="dollar">
            <img src={dollar_icon} height={16} />
          </span>
          {value}
        </div>
      </BalanceWrapper>
    );
  };

  const CartButton: FC<{ cartCount: number }> = ({ cartCount }) => {
    return (
      <CartButtonContainer>
        <img className="cart-img" src={cart_img} width={50} height={50} />
        <div className="cart-count">{cartCount}</div>
      </CartButtonContainer>
    );
  };

  return (
    <NavbarContainer className="fl g1">
      <div className="fl g1">
        <img className="logo" src={logo} alt="" width={200} />
        <NavActionsContainer className="fl">
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
      <div className="fl g1 m-l-auto">
        <Search
          className="search-box"
          onSearch={(inputText: string) => {
            console.log(inputText);
          }}
        />
        <Balance value={100} />
        <CartButton cartCount={Object.keys(cartItems).length} />
        <div className="contact-section fl">
          <div className="txt">Contact Us</div>
          <div className="separator" />
          <div className="txt">FAQ</div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
