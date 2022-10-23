import React from 'react'
import type { Children } from '../../library/types'

const PageWrapper = ({ children }: Children) => {
  return <div className='flex flex-col h-full container  mx-auto max-w-full justify-between'>{children}</div>
}

export default PageWrapper
