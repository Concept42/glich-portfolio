import { SocialIcon } from 'react-social-icons'
import { socials } from '../../library/data'

import React from 'react'

const SocialIcons = () => {
  return (
    <div className='flex fixed bottom-20 right-20 gap-5'>
      {socials.map((social, index) => {
        return (
          <ul key={index}>
            <li>
              <SocialIcon style={{ width: '30px', height: '30px' }} url={social} />
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default SocialIcons
