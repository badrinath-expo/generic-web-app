import React, { FC, useMemo } from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { FaAngleRight } from "react-icons/fa6";
import './Ecommerce.css';
//carousel
import clothing from '../../assets/carousel/clothing.jpg';
import accessories from '../../assets/carousel/accessories.jpg'
import hats from '../../assets/carousel/hats.jpg';
import petswag from '../../assets/carousel/petswag.jpg';

//brand logos
import adidas from '../../assets/brand_logos/Adidas_Logo.svg';
import apple from '../../assets/brand_logos/Apple_logo_black.svg';
import xiaomi from '../../assets/brand_logos/xiaomi-4.svg';
import gucci from '../../assets/brand_logos/Gucci_logo.svg';
import h_m from '../../assets/brand_logos/H&M-Logo.svg.png';
import lg from '../../assets/brand_logos/lg.svg';
import lego from '../../assets/brand_logos/lego.svg';
import garnier from '../../assets/brand_logos/garnier-2.svg';
import gillete from '../../assets/brand_logos/gillette.svg';
import castrol from '../../assets/brand_logos/castrol-4.svg';
import loreal from '../../assets/brand_logos/l-oreal-3.svg';


//grid
import grid_shoe from '../../assets/grids/shoe.svg';
import grid_cloth from '../../assets/grids/cloth.svg';
import grid_smartphone from '../../assets/grids/smartphone.svg';
import grid_beauty from '../../assets/grids/beauty.svg';

import grid_bg from '../../assets/grids/bg.jpg';


const HomeContainer = styled.div`
  background-image:url(bg.jpg);
  transition: all 0.3s linear;
  align-items: center;
  padding-bottom: 1rem;
`
const CarouselContainer = styled.div`
  padding:1rem;
  gap:8px;
`

const CarouselItem = styled.div`
  flex:1;
  height: 450px;

  border-radius: 8px;
  display: flex;
  height: 100%;
  position: relative;


  .carousel_item {
    object-fit: cover;
    height: 450px;

  }

  img{
    object-fit: contain;
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
  }

  .title{
    margin: auto 8px 8px auto;
    font-size:32px;
    font-weight: 350;
    color:#f4f3f3;
    cursor: pointer;
    position: absolute;
    bottom: -2px;
    right: 3px;
  }

  &:hover{
    flex:4;
    transition: all 0.5s linear;
  }
`

const SliderContainer = styled.div`
  padding: 1rem;
  gap: 3.5rem;
  overflow: auto;
  scrollbar-width: none;
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
    margin: 4px;
    border-radius: 8px;
  }

  .q1,
  .q4 {
    height: 250px;
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


const AuthButtonContainer = styled.div`
  border: 2px solid #ccc;
  padding: 8px 1rem;
  border-radius: 8px;
  margin:8px auto;
  width: min(90vw,320px);
  text-align: center;
  background-color: #000;
  color:#fff;
cursor: pointer;
  .title{
    font-weight: 600;
  }

  &:hover{
  background-color: #3e355e;
  }
`

const OrSeparatorContainer = styled.div`
  .line{
    width:120px;
    height: 2px;
    background-color: #d0cece;
  }
`

const EcommerceHome = () => {


  const carouselItems = useMemo(() => {
    return [
      {
        img_url: clothing,
        title: 'Apparel'
      },
      {
        img_url: accessories,
        title: 'Accessories'
      },
      {
        img_url: hats,
        title: 'Hats/Glowes'
      },
      {
        img_url: petswag,
        title: 'Pet swag'
      },
    ]
  }, [])

  const Carousel = () => {
    return <CarouselContainer className='fl'>
      {carouselItems.map((carouselItem) => {
        return <CarouselItem>
          <div className="title fl ac">{carouselItem.title}</div>
          <img className='carousel_item' src={carouselItem.img_url} />
        </CarouselItem>
      })}
    </CarouselContainer>
  }

  const LogoSlider = () => {
    const brandLogos = [adidas, gucci, apple, h_m, gillete, xiaomi, lg, lego, garnier, castrol, loreal]
    return <SliderContainer className='fl g2 js'>
      {brandLogos.map(brandLogo => {
        return <img className='slider-img' src={brandLogo} />
      })}
    </SliderContainer>
  }


  const Grid = () => {
    return <GridContainer className='fl' style={{backgroundImage:`url(${grid_bg})`}}>
      <div className='m-l-auto'>
        <img className="q q1" src={grid_shoe} />
        <img className="q" src={grid_smartphone} />
      </div>
      <div className='second-half m-r-auto'>
        <img className="q" src={grid_cloth} />
        <img className="q q4" src={grid_beauty} />
      </div>
    </GridContainer>
  }


const AuthButton:FC<{title:string;}> = ({title}) =>{
  return <AuthButtonContainer>
    <div className="title">{title}</div>
  </AuthButtonContainer>
}


const OrSeparator = ()=>{
  return <OrSeparatorContainer className='fl ac g1'>
<div className='line'/>
or
<div className='line'/>
  </OrSeparatorContainer>
}
  return (
    <HomeContainer className='fl fl-c'>
      <Navbar />
      <div style={{paddingTop:80}} />
      <Carousel />
      <LogoSlider />
      <Grid />
      <AuthButton title='Login'/>
      <OrSeparator/>
      <AuthButton title='SignUp'/>
    </HomeContainer>
  )
}

export default EcommerceHome;