import type { Children } from '../../library/types'
import Navigation from '../ui/Navigation'
import useHamburger from '../../library/hooks/useHamburger'
import SocialIcons from '../ui/SocialIcons'
import PageWrapper from './PageWrapper'

export const AppLaylout = ({ children }: Children) => {
  const { open, handleOpen } = useHamburger()

  return (
    <>
      {/* <div className='flex items-center justify-center w-screen h-screen bg-primary-orange'>
        <Navigation open={open} handleOpen={handleOpen} />

        <div className='w-display h-display bg-white'>{children}</div>
        <SocialIcons />
      </div> */}
      <Navigation open={open} handleOpen={handleOpen} />
      {/* <div className=''>{children}</div> */}
      <div className='w-display h-display mt-[25px] mx-auto bg-yellow-200 relative'>{children}</div>
      <div>
        <div className='absolute top-0 bg-primary-orange w-full h-10 '>orange</div>
        <div className='absolute bg-primary-orange w-full h-full'>orange</div>
        <div className='absolute bg-primary-orange w-full h-full'>orange</div>
        <div className='absolute bg-primary-orange w-full h-full'>orange</div>
      </div>

      <SocialIcons />
    </>
  )
}
