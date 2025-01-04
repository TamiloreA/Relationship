import React from 'react'
import {picture} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import { img1, img3, img4, img5, img6, img7, img8, img9, img10 } from "../assets";

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: img1, title: 'November 9, 2024', description: "The very first messages we sent each other on Whatsapp, a milestone in our relationship. The best feeling ever!"},   
    { Image: img3, title: 'February 28, 2024', description: "Just you being the cutest girl in the whole world 😍❤️"},
    { Image: img4, title: 'September 13, 2024', description: "Just me casually showing you who the boss is 😂"},
    { Image: img5, title: 'February 14, 2024', description: "You being so cute again 😍❤️"},
    { Image: img6, title: 'March 12, 2024', description: "Our very first fight. Damn i messed up right?"},
    { Image: img7, title: 'February 14, 2024', description: "When we read together...the moments i cherish"},
    { Image: img8, title: 'February 14, 2024', description: "Sticker warsss!!!"},
    { Image: img9, title: 'February 14, 2024', description: "When we were still doing long distance"},
    { Image: img10, title: 'February 14, 2024', description: "I too dey sleep mehn. I gats change this year"},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Messages
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

export default Message