import React from 'react';
import Main from './Main';


const Card = (props) => {
    return(
        <>
        <div class="main__card">
            <img class="main__card-img" src={props.img}/>
            <h3 class="main__card-title">{props.title}</h3>
            <p class="text">{props.text}</p>
        </div>
        </>
    )
}

export default Card;