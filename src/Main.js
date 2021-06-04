import React from 'react';
import Card from './Card';
import Slider from "react-slick";
import CardImg from './img/card.svg';
import CardImg2 from './img/card2.svg';
import CardImg3 from './img/card3.svg';
import CardImg4 from './img/card4.svg';
import CardImg5 from './img/card5.svg';


const Main = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 10000
    }
    return(
        <section class="main">
                <Slider {...settings}>
                    <Card img={CardImg} title={'Naxly as the Winners in Global Agency Awards'} text={'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'} className="main__inner-card"/>
                    <Card img={CardImg2} title={'Expert Prespective Agency Awards'} text={'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'} className="main__inner-card"/>
                    <Card img={CardImg3} title={'Business Prespective Global Agency Awards'} text={'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'} className="main__inner-card"/>
                    <Card img={CardImg4} title={'Value for Results in Global Agency Awards'} text={'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'} className="main__inner-card"/>
                    <Card img={CardImg5} title={'Global Experience in Agency Awards'} text={'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'} className="main__inner-card"/>
                </Slider>
                <div class="main__footer">
                    <div class="main__block">
                        <h2 class="title">
                            Apply AI, Deep Learning and Data Sciece to solve
                        </h2>
                        <p class="text">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                        <button class="btn btn-md">Learn More</button>
                    </div>
                     <div class="main__block">
                        <img class="main__img" src={AboutImg}/>
                    </div>
                </div>
        </section>
    )
};

export default Main;