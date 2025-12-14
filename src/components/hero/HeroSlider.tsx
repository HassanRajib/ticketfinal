"use client"

import { motion } from 'framer-motion'
import { ImagesSlider } from '../ui/images-slider'
// import { Link } from 'react-router-dom'

const HeroSlider = () => {
    const image = [
        "../image/tha1.png",
        "../image/tha.jpeg",
        "../image/hero.png"
    ]
  return (
    <div className=' w-full'> 
        <ImagesSlider className="h-[40rem]" images={image}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent py-4">
          
        </motion.p>
        {/* <button className="px-4 py-2 backdrop-blur-sm borde border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link to={"event"}>Buy Ticket →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
    </div>
  )
}

export default HeroSlider