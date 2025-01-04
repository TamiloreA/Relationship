import React from 'react'
import { picture } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import { img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21 } from "../assets";

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: img11, title: 'December 15, 2023', description: "My very first picture of you"},   
    { Image: img20, title: 'September 23, 2024', description: "Our first picture together. We are so perfect dayumm!!"},
    { Image: img12, title: 'July 11, 2024', description: "When you were doing your internship, see beauty nauuu!!! 😍❤️❤️"},
    { Image: img13, title: 'December 28, 2024', description: "See as your husband hottt!!!"}, 
    { Image: img14, title: 'December 27, 2023', description: "This was like the first time you spammed me, my head been wan burst 😍❤️"}, 
    { Image: img16, title: 'March 12, 2024', description: "Video calls with you during long distance, best time of my life fr!"}, 
    { Image: img18, title: 'August 12, 2024', description: "Me during post siwes, i know you're licking your screen just calm down 😂😂"}, 
    { Image: img19, title: 'September 23, 2024', description: "See as my babe hotttttt nauuuuuuuu!!!!! 😍😍😍😍😍😍😍❤️❤️❤️❤️❤️"}, 
    { Image: img21, title: 'November 21, 2024', description: "My Obodoyibo after a successful defense, radiating beauty not failure. My babe too smart mehnnnn!!!"}, 

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture