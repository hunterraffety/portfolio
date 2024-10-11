import React from 'react'
import { FaHeart, FaCrown } from 'react-icons/fa'

interface IconProps {
  type: 'relentless' | 'champion'
  className?: string
}

const Icon: React.FC<IconProps> = ({ type, className }) => {
  switch (type) {
    case 'relentless':
      return <FaHeart className={className} />
    case 'champion':
      return <FaCrown className={className} />
    default:
      return null
  }
}

export default Icon
