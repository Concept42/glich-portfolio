import type { NextPage } from 'next'
import Navigation from '../components/ui/Navigation'
import GlichText from '../components/ui/GlichText'
import AnimatedText from '../components/ui/AnimatedText'
import SocialIcons from '../components/ui/SocialIcons'
import BasicButton from '../components/ui/BasicButton'
import { useEffect, useState } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import useHamburger from '../library/hooks/useHamburger'

const Home: NextPage = () => {
  const { open, handleOpen } = useHamburger()

  return (
    <PageWrapper>
      {!open ? (
        <div className='flex flex-col w-full h-full justify-center items-center gap-4 md:gap-4'>
          <GlichText> I&apos;M ZORAN LATKOVIĆ</GlichText>
          <AnimatedText></AnimatedText>
          <div className='mt-5'>
            <BasicButton>My Work</BasicButton>
          </div>
        </div>
      ) : (
        ''
      )}
    </PageWrapper>
  )
}

export default Home
