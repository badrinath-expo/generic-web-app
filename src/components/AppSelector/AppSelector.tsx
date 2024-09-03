import React, { FC } from 'react';
import './AppSelector.css';
import { useLocation, useNavigate } from 'react-router-dom';
import css  from 'classnames';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const menuItems = [{
    title: 'Analytics',
    url: '/analytics'
}, {
    title: 'Portfolio',
    url: '/portfolio'
}, {
    title: 'Ott-platform',
    url: '/ott-platform'
}, {
    title: 'e-commerce',
    url: '/e-commerce'
},
]

const AppSelector: FC = () => {
    const location = useLocation();
    const navigate = useNavigate()
  
    return (
        <div className='fl rg-1 menu-items-container'>
            <div className="logo"></div>
            {menuItems && menuItems.map((item, index) => (<a className={css({'selected-route':(location.pathname.includes(item.url))})} key={index} onClick={()=> navigate(item.url)}>{item.title}</a>))}
            {true?<IoIosArrowUp/> :<IoIosArrowDown />}
        </div>
    )
}

export default AppSelector;
