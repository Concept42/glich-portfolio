import type { NextPage } from 'next'
import Navigation from '../components/ui/Navigation'
import GlichText from '../components/ui/GlichText'
import AnimatedText from '../components/ui/AnimatedText'
import SocialIcons from '../components/ui/SocialIcons'
import BasicButton from '../components/ui/BasicButton'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col h-full container  mx-auto max-w-full justify-between'>
      <div>
        <Navigation />
      </div>
      <div className='flex flex-col w-full justify-center items-center gap-4 md:gap-4'>
        <GlichText> I&apos;M ZORAN LATKOVIĆ</GlichText>
        <AnimatedText></AnimatedText>
        <div className='mt-5'>
          <BasicButton>Let&apos;s chat</BasicButton>
        </div>
      </div>
      <div className='flex gap-5 w-full justify-end items-center p-10'>
        <SocialIcons />
      </div>
    </div>
  )
}

export default Home
