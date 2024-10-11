import React from 'react'

interface MagnifyingGlassProps {
  className?: string
  width?: number
  height?: number
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({
  className,
  width = 100,
  height = 100,
}) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      width={width}
      height={height}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M21 21l-4.35-4.35M10.5 19a8.5 8.5 0 100-17 8.5 8.5 0 000 17z'
      />
    </svg>
  )
}

export default MagnifyingGlass
