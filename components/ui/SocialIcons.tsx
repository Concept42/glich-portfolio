import { SocialIcon } from 'react-social-icons'
import { socials } from '../../library/data'

import React from 'react'

const SocialIcons = () => {
  return (
    <>
      {socials.map((social, index) => {
        return (
          <ul key={index}>
            <li>
              <SocialIcon style={{ width: '30px', height: '30px' }} url={social} />
            </li>
          </ul>
        )
      })}
    </>
  )
}

export default SocialIcons
