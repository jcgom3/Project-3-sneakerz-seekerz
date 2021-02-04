import React from 'react';
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import Modals from './Modal/index';
// import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/productList',
        icon: <GiIcons.GiSonicShoes />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact-us',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Developers',
        path: '/developers',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    <Modals></Modals>
]