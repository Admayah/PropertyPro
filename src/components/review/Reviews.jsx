import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './style.css'



const Reviews = () => {

  const slider = React.useRef(null)

  const hotelCards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      title: 'Studio Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      title: 'King Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
  ]


  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // infinite: false,
  };


  function nextBtn() {
    console.log('hello')
  }
  return (
    <>
      <div className='controls'>
        {/* <div className='btn-slick'>
          <button className='mide mide__prev' onClick={() => slider?.current?.slickPrev()
          }
          >
            <FaChevronLeft />
          </button>
          <button
            className='mide mide__next'
            onClick={() => slider?.current?.slickNext()}
          >
            <FaChevronRight />
          </button>
        </div> */}



        {/* <button
        className='mide'
         onClick={() => slider?.current?.slickNext()}>Next</button> */}
        <div className='abc'>

          <Slider ref={slider} {...settings}>
            {/* <div className="hello1"> */}
            <div className='review__wrapper'>

              Investing with Dradrock is quite impressive. I'm coming to Prime Oikos for the first time and within a short time, I can say there's a very big plan for the future. I'm looking forward to the apartments you're building. I'm quite impressed with your processes and I would most definitely recommend Dradrock to others.
            </div>
            <div className='review__wrapper'>

              Investing with Dradrock is quite impressive. I'm coming to Prime Oikos for the first time and within a short time, I can say there's a very big plan for the future. I'm looking forward to the apartments you're building. I'm quite impressed with your processes and I would most definitely recommend Dradrock to others.
            </div>
            <div className='review__wrapper'>

              Investing with Dradrock is quite impressive. I'm coming to Prime Oikos for the first time and within a short time, I can say there's a very big plan for the future. I'm looking forward to the apartments you're building. I'm quite impressed with your processes and I would most definitely recommend Dradrock to others.
            </div>
            {/* </div> */}

            {/* {hotelCards.map((card, index) => (

        <div key={index} className='hope'>
            <h2>{card.title}</h2>
            <img alt={card.title} src={card.imageSrc} width="100" height="100" />
            <p>{card.description}</p>
            <ul>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className='btn'>Buy Now</button>
        </div>

        ))} */}

          </Slider>
        </div>
        <div class="btings">
          <button class="slider__btn slider__btn--left"
            onClick={() => slider?.current?.slickPrev()}
          >

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#1C3988'><path d="M16.4 18.2c0-.4-.1-.7-.4-.9L11.4 13c-.5-.5-.5-1.4 0-1.9L16 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1z"></path></g></svg>

          </button>
          <button class="slider__btn slider__btn--right"
            onClick={() => slider?.current?.slickNext()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#1C3988'><path d="M7.6 5.8c0 .4.1.7.4.9l4.6 4.3c.5.5.5 1.4 0 1.9L8 17.2c-.3.2-.4.6-.4.9 0 1.1 1.3 1.7 2.1.9l6.8-6.2c.6-.5.6-1.4 0-1.9l-6.8-6c-.8-.7-2.1-.1-2.1.9z"></path></g></svg>
          </button>
        </div>
      </div>


    </>

  )
}

export default Reviews