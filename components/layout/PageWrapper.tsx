import React from 'react'
import type { Children } from '../../library/types'

const PageWrapper = ({ children }: Children) => {
  return <div className=' flex flex-col h-full container max-w-full bg-green-400 '>{children}</div>
}

export default PageWrapper
