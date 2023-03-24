import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import cardsDefaultImage from '../assets/images/slider/Vector.svg'
import playersImage from '../assets/images/slider/players-cards.png'

export default function SlickSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: true,
                centerPadding: '30px',
              }
            },
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  centerMode: true,
                  centerPadding: '30px',
                }
              },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '30px',
              }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                  }
              }
          ]
    };
    return (
        <>
            <Slider {...settings} className="mb-4">
                <div className="slider-cards">
                    <Card style={{ alignItems: 'center', paddingTop: '32px', backgroundColor: '#F0F2F5', border: 'none' }}>
                        <Card.Title><img src={cardsDefaultImage} alt="card_img" /></Card.Title>
                        <Card.Body>
                            <h6>“Sed est integer eu consequat, mi, condimentum pulvinar mattis velit. Sem sodales enim pellentesque sit sit dui rutrum.”</h6>
                            <p>A Happy Customer</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="slider-cards">
                    <Card className="cover-img-card" style={{ alignItems: 'center', border: 'none' }}>
                        <img className="w-100" src={playersImage} alt="players_img" />
                    </Card>
                </div>
                <div className="slider-cards">
                    <Card style={{ alignItems: 'center', paddingTop: '32px', backgroundColor: '#F0F2F5', border: 'none' }}>
                        <Card.Title><img src={cardsDefaultImage} alt="card_img" /></Card.Title>
                        <Card.Body>
                            <h6>“Sed est integer eu consequat, mi, condimentum pulvinar mattis velit. Sem sodales enim pellentesque sit sit dui rutrum.”</h6>
                            <p>A Happy Customer</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="slider-cards">
                    <Card style={{ alignItems: 'center', paddingTop: '32px', backgroundColor: '#F0F2F5', border: 'none' }}>
                        <Card.Title><img src={cardsDefaultImage} alt="card_img" /></Card.Title>
                        <Card.Body>
                            <h6>“Sed est integer eu consequat, mi, condimentum pulvinar mattis velit. Sem sodales enim pellentesque sit sit dui rutrum.”</h6>
                            <p>A Happy Customer</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="slider-cards">
                    <Card className="cover-img-card" style={{ alignItems: 'center', border: 'none' }}>
                        <img className="w-100" src={playersImage} alt="players_img" />
                    </Card>
                </div>
                <div className="slider-cards">
                    <Card style={{ alignItems: 'center', paddingTop: '32px', backgroundColor: '#F0F2F5', border: 'none' }}>
                        <Card.Title><img src={cardsDefaultImage} alt="card_img" /></Card.Title>
                        <Card.Body>
                            <h6>“Sed est integer eu consequat, mi, condimentum pulvinar mattis velit. Sem sodales enim pellentesque sit sit dui rutrum.”</h6>
                            <p>A Happy Customer</p>
                        </Card.Body>
                    </Card>
                </div>
            </Slider>
        </>
    )

}