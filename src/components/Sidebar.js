import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';


    

function Sidebar() {
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider  value={{color:'#fff'}}>

      
       {/*<div className="navbar">
            <Link to="#" className='menu-bars2'>
            <FaIcons.FaBars onClick={showSidebar}/>
             </Link>
    </div>*/}
       
        <nav className={sidebar ? 'nav-menu2 active':'nav-menu2'}>
        <ul className='nav-menu2-items' onClick={showSidebar}>
      { /*<li className='navbar2-toogle'>
            <Link to="#" className='menu2-bars'>
            <AiIcons.AiOutlineClose/>
            </Link>
</li>  */}
        {SidebarData.map((item,index)=>{
           return(
               <li key={index} className={item.cName}>
               <Link to={item.path}>
               {item.icon}
               <span>  
                   {item.title}
             </span>
               </Link>
               
               </li>
           );
        })
    }
        </ul> 
        </nav>
        </IconContext.Provider>
       </>
    );
}

export default Sidebar

