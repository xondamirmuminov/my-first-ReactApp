import React from 'react';
import Logo from './img/logo.svg';

const Header = () =>{
    return(
       <header class="header">
           <div class="container">
               <nav class="header__inner">
                   <div class="header__block">
                       <a class="header__logo" href="#">
                           <img src={Logo}/>
                       </a>
                       <ul class="header__list">
                           <li class="header__list-item">
                               <a class="header__list-link" href="#">home</a>
                           </li>
                           <li class="header__list-item">
                               <a class="header__list-link" href="#">about</a>
                           </li>
                           <li class="header__list-item">
                               <a class="header__list-link" href="#">services</a>
                           </li>
                           <li class="header__list-item">
                               <a class="header__list-link" href="#">blog</a>
                           </li>
                           <li class="header__list-item">
                               <a class="header__list-link" href="#">contact</a>
                           </li>
                       </ul>
                   </div>
                   <div class="header__block">
                       <button class="btn">Sign In</button>
                   </div>
               </nav>
           </div>
       </header>
    )
}
export default Header;