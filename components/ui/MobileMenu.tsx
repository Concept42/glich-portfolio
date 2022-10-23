import Link from 'next/link'
import React from 'react'
import { navItems } from '../../library/data'

const MobileMenu = () => {
  return (
    <div id='Modal' className='md:hidden flex items-start justify-center  w-full h-full bg-white mt-10 '>
      <ul className='flex flex-col gap-10 justify-center items-center'>
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
    </div>
  )
}

export default MobileMenu
