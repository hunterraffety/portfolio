// components/Icon.tsx

import React from 'react'
import { FaHeart, FaCrown } from 'react-icons/fa' // Example icons

interface IconProps {
  type: 'relentless' | 'champion'
  className?: string
}

const Icon: React.FC<IconProps> = ({ type, className }) => {
  switch (type) {
    case 'relentless':
      return <FaHeart className={className} /> // Represents passion and drive
    case 'champion':
      return <FaCrown className={className} /> // Represents leadership and support
    default:
      return null
  }
}

export default Icon
