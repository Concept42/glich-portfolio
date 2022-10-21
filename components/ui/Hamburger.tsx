import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

interface Props {
  isOpen: boolean
}

function Hamburger({ isOpen }: Props) {
  // const [open, setOpen] = useState(false)

  // useEffect(() => {
  //   setOpen(isOpen)
  // }, [isOpen])
  return (
    <>
      <motion.div className='block md:hidden cursor-pointer z-[2]'>
        <motion.div
          initial={{ translateY: 0, rotate: 0, backgroundColor: 'black' }}
          animate={isOpen ? { translateY: 12, rotate: 45, backgroundColor: 'black' } : ''}
          className='block w-10 h-0.5 my-2 bg-black'
        ></motion.div>
        <motion.div
          initial={{ translateY: 0, opacity: 1, backgroundColor: 'black' }}
          animate={isOpen ? { opacity: 0, backgroundColor: 'black' } : ''}
          className='block w-10 h-0.5 my-2 bg-black'
        ></motion.div>
        <motion.div
          initial={{ translateY: 0, rotate: 0, backgroundColor: 'black' }}
          animate={isOpen ? { translateY: -12, rotate: -45, backgroundColor: 'black' } : ''}
          className='block w-10 h-0.5  bg-black'
        ></motion.div>
      </motion.div>
    </>
  )
}

export default Hamburger
