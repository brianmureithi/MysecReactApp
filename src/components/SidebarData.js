import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

 export const SidebarData=[
     {
     title:'Home',
     path:'/',
     icon:<AiIcons.AiFillHome/>,
     cName: 'nav-text'
},
{
    title:'Reports',
    path:'/reports',
    icon:<IoIcons.IoIosPaper/>,
    cName: 'nav-text'
},
{
    title:'Products',
    path:'/products',
    icon:<IoIcons.IoMdRibbon/>,
    cName: 'nav-text'
},
{
    title:'Services',
    path:'/services',
    icon:<IoIcons.IoIosPeople/>,
    cName: 'nav-text'
},
{
    title:'Contact us',
    path:'/contact',
    icon:<AiIcons.AiFillMail/>,
    cName: 'nav-text'
},
{
    title:'Sign Up',
    path:'/signup',
    icon:<FaIcons.FaUserAlt/>,
    cName: 'nav-text'
}


]