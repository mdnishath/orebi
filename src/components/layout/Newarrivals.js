import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Newarrivals = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    // arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 734,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 684,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Container>
        <div className="mb-4 mt-5 md:mb-7 md:mt-[128px]">
          <Heading title="New Arrivals" />
        </div>
        <Slider {...settings}>
          <Product
            src="images/product1.png"
            productName="Basic Crew Neck Tee"
            title="New"
            badge={true}
            category="black"
            gap={true}
          />
          <Product
            src="images/product1.png"
            productName="Basic Crew Neck Tee"
            title="50%"
            badge={true}
            category="black"
            gap={true}
          />
          <Product
            src="images/product1.png"
            productName="Basic Crew Neck Tee"
            title="15%"
            badge={true}
            category="black"
            gap={true}
          />
          <Product
            src="images/product1.png"
            productName="Basic Crew Neck Tee"
            title="new"
            badge={true}
            category="black"
            gap={true}
          />
          <Product
            src="images/product1.png"
            productName="Basic Crew Neck Tee"
            title="20%"
            badge={false}
            category="black"
            gap={true}
          />
        </Slider>
      </Container>
    </div>
  );
};

export default Newarrivals;
