'use client'
import React from 'react'
import { motion } from "motion/react"


const Welcome = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div
        initial={{
          opacity:0,
          y:-20
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:2
        }}
      >
        Welcome
      </motion.div>
    </div>
  )
}

export default Welcome
