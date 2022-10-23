import React, { useState } from 'react'

const useHamburger = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return { open, handleOpen }
}

export default useHamburger
