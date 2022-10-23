import type { NextPage } from 'next'
import React from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import Navigation from '../components/ui/Navigation'
import useHamburger from '../library/hooks/useHamburger'

const About: NextPage = () => {
  const { open, handleOpen } = useHamburger()
  return (
    <PageWrapper>
      <div>
        <Navigation open={open} handleOpen={handleOpen} />
      </div>
    </PageWrapper>
  )
}

export default About
