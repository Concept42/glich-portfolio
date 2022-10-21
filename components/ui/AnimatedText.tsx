import { TypeAnimation } from 'react-type-animation'

const AnimatedText = () => {
  return (
    <TypeAnimation
      className='text-[10px] md:text-sm text-secondary-text font-light'
      sequence={['Front-end Developer and Web designer.', 2000, 'Based in Koprivnica, Croatia.', 2000]}
      wrapper='div'
      cursor={true}
      repeat={Infinity}
    />
  )
}

export default AnimatedText
