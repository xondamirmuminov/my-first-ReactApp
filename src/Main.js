import React from 'react';
import Card from './Card';


const Main = () => {
    return(
        <section class="main">
            <div class="container">
                <div  data-slick='{"slidesToShow": 4, "slidesToScroll": 4}' class="main__inner">
                    <Card/>
                </div>
            </div>
        </section>
    )
};

export default Main;