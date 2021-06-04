import React from 'react';
import Main from './Main';
import CardImg from './img/card.svg';
import CardImg2 from './img/card2.svg';
import CardImg3 from './img/card3.svg';
import CardImg4 from './img/card4.svg';
import CardImg5 from './img/card5.svg';

const Card = () => {
    return(
        <div class="main__card">
            <img class="main__card-img" src={CardImg}/>
            <h3 class="main__card-title">Naxly as the Winners in Global Agency Awards</h3>
            <p class="text">Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
    )
}

export default Card;