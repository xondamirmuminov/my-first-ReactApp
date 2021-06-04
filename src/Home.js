import React from 'react';
import Video from './img/video.svg';
import SectionImg from './img/section.svg';
import HomeImg from './img/logoipsum.svg';
import HomeImg2 from './img/logoipsum2.svg';
import HomeImg3 from './img/logoipsum3.svg';
import HomeImg4 from './img/logoipsum4.svg';

const Home = () =>{
    return(
        <section class="home">
            <div class="container">
                <div class="home__inner">
                    <div class="home__block">
                        <h3 class="home__subtitle">
                            Next genaretion platform
                        </h3>
                        <h1 class="home__title">
                         Artificial intelligence & Syber security
                        </h1>
                        <p class="home__text">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                        <div class="home__inner-btn">
                            <button class="btn btn-lg">
                                Get Started
                            </button>
                            <button class="btn btn-lg">
                                <img src={Video}/>
                                Watch Video
                            </button>
                        </div>
                    </div>
                    <div class="home__block">
                        <img class="home__img" src={SectionImg}/>
                    </div>
                </div>
                    <div class="home__footer">
                        <a class="home__footer-link" href="#">
                            <img src={HomeImg}/>
                        </a>
                        <a class="home__footer-link" href="#">
                            <img src={HomeImg2}/>
                        </a>
                        <a class="home__footer-link" href="#">
                            <img src={HomeImg3}/>
                        </a>
                        <a class="home__footer-link" href="#">
                            <img src={HomeImg4}/>
                        </a>
                    </div>
              </div>
        </section>
    )
}
export default Home;