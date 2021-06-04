import React from 'react';
import AboutImg from './img/section2.svg'

const About = ()=> {
    return(
        <section class="about">
            <div class="container">
                <div class="about__inner">
                    <div class="about__block">
                        <img class="about__img" src={AboutImg}/>
                    </div>
                    <div class="about__block">
                        <h2 class="title">
                            Apply AI, Deep Learning and Data Sciece to solve
                        </h2>
                        <p class="text">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                        <button class="btn btn-md">Learn More</button>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default About;