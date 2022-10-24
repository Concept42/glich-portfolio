import type { NextPage } from 'next'
import GlichText from '../components/ui/GlichText'
import AnimatedText from '../components/ui/AnimatedText'
import BasicButton from '../components/ui/BasicButton'
import PageWrapper from '../components/layout/PageWrapper'
import useHamburger from '../library/hooks/useHamburger'

const Home: NextPage = () => {
  const { open } = useHamburger()

  return (
    <PageWrapper>
      {!open ? (
        <div className='flex flex-col w-full h-full justify-center items-center gap-2 md:gap-2'>
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
