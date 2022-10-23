import { navItems } from '../../library/data'
import Link from 'next/link'
import BasicButton from './BasicButton'
import Hamburger from './Hamburger'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Navigation = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false)

  const handleHamburger = () => {
    setOpenHamburger(!openHamburger)
    const openModal = document.getElementById()
  }

  return (
    <div>
      <div className='flex justify-between items-center gap-10 p-10'>
        <h3>Zoran Latković</h3>
        <ul className='hidden md:flex gap-10 '>
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <li className='cursor-pointer text-primary-text text-sm font-light hover:text-secondary-orange'>
                  {item.name}
                </li>
              </Link>
            )
          })}
        </ul>
        <div className='hidden md:flex'>
          <BasicButton>Let&apos;s chat</BasicButton>
        </div>
        <div onClick={handleHamburger} className='md:hidden'>
          <Hamburger isOpen={openHamburger} />
        </div>
      </div>
      <div>{openHamburger ? <MobileMenu /> : ''}</div>
    </div>
  )
}

export default Navigation
