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
      <div>
        <Navigation open={open} handleOpen={handleOpen} />
      </div>
      {!open ? (
        <div className='flex flex-col w-full justify-center items-center gap-4 md:gap-4'>
          <GlichText> I&apos;M ZORAN LATKOVIĆ</GlichText>
          <AnimatedText></AnimatedText>
          <div className='mt-5'>
            <BasicButton>My Work</BasicButton>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className='flex gap-5 w-full justify-end items-center p-10'>
        <SocialIcons />
      </div>
    </PageWrapper>
  )
}

export default Home
