import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './cards'



export default function ResultsSlider(props) {
    
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings} className="results-slider-outer">
                {props.cardsData.map((items, idx) => {
                    return (
                        <div className="slider-cards" key={idx}>
                            <Cards cardTitle={items.title} cardSubTitle={items.sub_title} cardImage={items.image} />
                        </div>
                    )
                })}
            </Slider>
        </>
    )

}