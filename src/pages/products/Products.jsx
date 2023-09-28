import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import "./Products.css"


const ProductsData = [
  {
    name: "GENI Technology",
    detail: "GENI Technology",
    img:'https://geni.technology/wp-content/uploads/2022/11/Full_logo_Color-1.svg'
  },
  {
    name: "C4RD MYANMAR",
    detail: "C4RD MYANMAR",
    img: 'https://c4rdmyanmar.org/images/logo/C4rdMyanmar_Horizontal_Logo_RGB_Full_Color_High_Res.png',
  },
  {
    name: "Made Myanmar",
    detail: "Made Myanmar",
    img: 'https://mademyanmar.com/public/uploads/all/J2M0dVzFYxdp7G6l9QPRIFyZQJkcfArG5QbQO4wY.png',
  },
  {
    name: "Esign",
    detail: "Esign",
    img:'https://esign.lumin.institute/images/home/securesign.png'
  },
  ]
const Products = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold'>Products</h1>
      <div className="relative mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
        >
          {ProductsData?.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="p-4 h-40 bg-white flex rounded-lg relative overflow-hidden">
                  <div>
                    <h1 className=" text-xl font-semibold">{product.name}</h1>
                    <p className=" text-xs">{product.detail}</p>
                  </div>
                  <div className=" absolute bottom-10 h-20 flex mt-2 items-center justify-center w-full right-1  -rotate-[10deg]">
                    <img src={product.img} className="w-[10rem] " alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </div>
  )
}

export default Products
