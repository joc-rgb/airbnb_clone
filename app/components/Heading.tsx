'use client'

import React from 'react'

interface HeadingProps{
    title: string
    subtitle?: string
    center?: boolean
}

const Heading:React.FC<HeadingProps> = ({title, subtitle, center}) => {
  return (
    <div className={center?'text-center':'text-start'}>
        <div className="text-xl font-bold">{title}</div>
        <div className="font-light text-md text-neutral-600 mt-2">{subtitle}</div>
    </div>
  )
}

export default Heading