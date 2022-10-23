import type { Children } from '../../library/types'
export const AppLaylout = ({ children }: Children) => {
  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen bg-primary-orange fixed '>
        <div className='w-[95vw] h-[95vh] md:w-[97vw] md:h-[94vh] bg-white '>{children}</div>
      </div>
    </>
  )
}
