import React from "react";
import logo from '../../img/1.svg';



const Nav = ({onLogin, onRegister}) => {

  return (
    <nav className=' flex justify-between items-center bg-primary py-15 px-20  w-full h-20'>
            <div>
        <img src={logo} alt="Error 404" className="font-bold text-[20px] items-center "/>
            </div>
            <div className="flex gap-20  text-white" >
        <a href="" data-i18n="home">Home</a>
        <a href="" data-i18n="product">Product</a>
        <a href="" data-i18n="pricing">Pricing</a>
        <a href="" data-i18n="abut">About</a>
        <a href="" data-i18n="contact">Contact</a>
            </div>
        <div className="flex gap-10 ">
        <a href="" className="no-underline
    px-4 py-2              
    rounded-[18px]      
    font-medium            
    transition-all duration-700 
    border border-white    
    bg-primary            
    text-white hover:bg-white hover:text-primary" data-i18n="register"
    onClick={(e) =>{e.preventDefault();
        onRegister();}
    }>Register</a>
        <a href=""className="no-underline
    px-4 py-2              
    rounded-[18px]      
    font-medium            
    transition-all duration-700 
    border border-white    
    bg-primary            
    text-white hover:bg-white hover:text-primary" data-i18n="login"   onClick={(e) => {
    e.preventDefault(); 
    onLogin();         
  }}>Login</a>
        </div>
        
    </nav>
  )
}
export default Nav;
