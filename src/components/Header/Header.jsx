import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../img/logo.svg'

import CatalogButton from "./Button";
export default function Header(){


    const iconStyle = {
        width:'22px',
        height:'22px',
    
    }
    const cartStyle = {
        width:'30px',
    }
    const ml = {
        marginLeft: '84px'
    }
    return(
 <div style={{background:'transparent'}}>
     <div className="Head" style={{display: 'flex',marginTop:'20px', width:'100%',boxShadow: '0px 5px 20px rgba(157, 157, 157, 0.25)'}}>
     <nav className="NavBar">
    <div>
         <img style={{ width:'179px', height:'80px',marginLeft:'84px'}} src={logo} alt="лого" />
         
    </div>
    <div style={{position:'absolute',right:'475px',top:'50px'}}>
        <b >Каталог товаров</b>
        <b style={{marginLeft:'66px'}}>Блог</b>
        <b style={{marginLeft:'66px'}}>Контакты</b> 
        <div className="icon-container" style={{marginLeft :'555px',marginTop:'-20px',position:'absolute', display:'flex'}}>
            <SearchIcon/>
            <span style={{marginLeft:'40px',marginTop:'-5px'}}>
            <ShoppingCartIcon/>
            </span>
            <span style={{marginLeft:'40px'}}>
            <AccountCircleIcon/>
            </span>
            
        </div>
    </div>
     </nav>
     </div>
     
 </div>
    )
}