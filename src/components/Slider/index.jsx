import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y } from 'swiper'
import ProductCard from '../ProductCard'
import phone_1 from '../../Assets/Images/phone_1.jpg'
import phone_2 from '../../Assets/Images/phone_2.jpg'
import phone_3 from '../../Assets/Images/phone_3.jpg'

// Swiper CSS
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'

SwiperCore.use([Navigation, A11y])

const cards = {
  category: 'Bestsellers',
  data: [
    { image: phone_1, name: 'Product A', price: '199.99' },
    { image: phone_2, name: 'Product B', price: '439.99' },
    { image: phone_3, name: 'Product C', price: '549.99' },
    { image: phone_1, name: 'Product D', price: '499.99' },
    { image: phone_2, name: 'Product E', price: '79.99' },
    { image: phone_3, name: 'Product F', price: '649.99' },
    { image: phone_1, name: 'Product G', price: '999.99' },
    { image: phone_2, name: 'Product H', price: '1499.99' },
    { image: phone_3, name: 'Product I', price: '349.99' },
    { image: phone_1, name: 'Product J', price: '999.99' },
  ],
}

const Slider = () => {
  return (
    <div className="container">
      <h4 className="category">{cards.category}</h4>
      <div className="slider_container">
        <Swiper navigation={true}
          grabCursor={true}
          modules={[Navigation, A11y]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          {cards.data.map((card, index) => {
            return (
              <SwiperSlide>
                <ProductCard
                  key={index}
                  name={card.name}
                  image={card.image}
                  price={card.price}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
