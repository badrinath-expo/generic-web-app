import React, { FC, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import css from "classnames";
import "./Ecommerce.css";
import { BsChevronRight } from "react-icons/bs";
//carousel
import clothing from "../../assets/carousel/clothing.jpg";
import accessories from "../../assets/carousel/accessories.jpg";
import hats from "../../assets/carousel/hats.jpg";
import petswag from "../../assets/carousel/petswag.jpg";
import smartphones from "../../assets/carousel/smartphones.jpg";
import fashion from "../../assets/carousel/fashion.jpg";
import tech from "../../assets/carousel/tech.jpg";

//brand logos
import adidas from "../../assets/brand_logos/Adidas_Logo.svg";
import apple from "../../assets/brand_logos/Apple_logo_black.svg";
import xiaomi from "../../assets/brand_logos/xiaomi-4.svg";
import gucci from "../../assets/brand_logos/Gucci_logo.svg";
import h_m from "../../assets/brand_logos/H&M-Logo.svg.png";
import lg from "../../assets/brand_logos/lg.svg";
import lego from "../../assets/brand_logos/lego.svg";
import garnier from "../../assets/brand_logos/garnier-2.svg";
import gillete from "../../assets/brand_logos/gillette.svg";
import castrol from "../../assets/brand_logos/castrol-4.svg";
import loreal from "../../assets/brand_logos/l-oreal-3.svg";

//grid
import grid_shoe from "../../assets/grids/shoe.svg";
import grid_cloth from "../../assets/grids/cloth.svg";
import grid_smartphone from "../../assets/grids/smartphone.svg";
import grid_beauty from "../../assets/grids/beauty.svg";

import AuthButtons from "./components/AuthButtons";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  background-image: url(bg.jpg);
  transition: all 0.3s linear;
  align-items: center;
  padding-bottom: 1rem;
`;
const CarouselContainer = styled.div`
  padding: 1rem;
  gap: 8px;
`;

const CarouselItem = styled.div`
  flex: 1;
  height: 450px;
  box-shadow: 0px 5px 12px 0px rgba(1, 1, 1, 0.25);
  border-radius: 8px;
  display: flex;
  height: 100%;
  position: relative;
  border: 1px solid #ccc;

  .carousel_item {
    object-fit: cover;
    height: 450px;
  }

  img {
    object-fit: contain;
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
  }

  .title {
    font-size: 22px;
    font-weight: 350;
    color: #000000;
    padding: 4px 8px;
    border-radius: 8px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: auto;
    right: auto;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.336);
    -webkit-backdrop-filter: blur(6.3px);
    backdrop-filter: blur(6.3px);
  }

  &:hover {
    flex: 4;
    transition: all 0.5s linear;
    box-shadow: 0px 20px 12px 0px rgba(1, 1, 1, 0.25);
  }

  .go-btn{
    right: 3px;
    bottom:3px;
    display: flex;
    align-items: center;
    gap:0.5rem;
  }
`;

const SliderContainer = styled.div`
  padding: 1rem;
  gap: 3.5rem;
  overflow: auto;
  scrollbar-width: none;
  width: 100%;
  .slider-img {
    width: 80px;
    aspect-ratio: 3/2;
    object-fit: contain;
  }
`;

const GridContainer = styled.div`
  margin: 1.5rem 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  padding: 5%;
  z-index: 5;

  .q {
    width: 320px;
    border: 1px solid #ccc;
    margin: 8px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px 0px rgba(1, 1, 1, 0.25);
    transition: all 0.3s linear;

    &:hover {
      box-shadow: 0px 10px 12px 0px rgba(17, 17, 18, 0.356);
    }
  }

  .q1,
  .q4 {
    height: 230px;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: contain;
  }
  .second-half {
    transform: translateY(20px);
  }
`;

const EcommerceHome = () => {
  const navigate = useNavigate()
  const carouselItems = useMemo(() => {
    return [
      {
        img_url: clothing,
        title: "Apparel",
        path:'/e-commerce/products?category=mens-shirts'
      },
      {
        img_url: accessories,
        title: "Accessories",
        path:'/e-commerce/products?category=sports-accessories'
      },
      {
        img_url: fashion,
        title: "Beauty",
        path:'/e-commerce/products?category=beauty'
      },
      {
        img_url: tech,
        title: "Tech",
        path:'/e-commerce/products?category=smartphones'
      },
    ];
  }, []);

  const Carousel = () => {
    const [activeCarouselItem, setActiveCarouselItem] = useState(-1);

    return (
      <CarouselContainer className="fl fl-c-m carousel-m">
        {carouselItems.map((carouselItem, index) => {
          return (
            <CarouselItem
              className={css("carousel-item-m", {
                "active-carousel-item-m": index == activeCarouselItem,
              })}
              key={carouselItem.img_url}
              onClick={() => setActiveCarouselItem(index)}
            >
              <div className="title fl ac">{carouselItem.title}</div>
              <img className="carousel_item" src={carouselItem.img_url} />
              <div className={css("title go-btn m-hide",{'m-show': activeCarouselItem === index})} onClick={()=>navigate(carouselItem.path) }>GO <BsChevronRight /></div>
            </CarouselItem>
          );
        })}
      </CarouselContainer>
    );
  };

  const LogoSlider = () => {
    const brandLogos = [
      adidas,
      gucci,
      apple,
      h_m,
      gillete,
      xiaomi,
      lg,
      lego,
      garnier,
      castrol,
      loreal,
    ];
    return (
      <SliderContainer className="fl g4 js g15-m">
        {brandLogos.map((brandLogo) => {
          return (
            <img
              className="slider-img"
              key={brandLogo.toString()}
              src={brandLogo}
            />
          );
        })}
      </SliderContainer>
    );
  };

  const Grid = () => {
    return (
      <GridContainer className="fl grid-container-m">
        <div className="m-l-auto">
          <img className="q q1" src={grid_shoe}  onClick={()=> navigate('/e-commerce/products?category=mens-shoes')} />
          <img className="q" src={grid_smartphone} onClick={()=> navigate('/e-commerce/products?category=smartphones')} />
        </div>
        <div className="second-half m-r-auto">
          <img className="q" src={grid_cloth} onClick={()=> navigate('/e-commerce/products?category=womens-dresses')} />
          <img className="q q4" src={grid_beauty} onClick={()=> navigate('/e-commerce/products?category=beauty')} />
        </div>
      </GridContainer>
    );
  };

  return (
    <HomeContainer className="fl fl-c fl1 ov-hidden">
      <Navbar />
      <div style={{ paddingTop: 80 }} />
      <div className="fl1 ov-auto">
        <Carousel />
        <LogoSlider />
        <Grid />
        <AuthButtons title1="Login" title2="SignUp"/>
      </div>
    </HomeContainer>
  );
};

export default EcommerceHome;
