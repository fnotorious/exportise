import React from 'react'

export const Pointer = ({darkMode}) => {
  return (
    <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 0L32.3923 22.5H11.6077L22 0Z" fill={darkMode ? "white" : "black"}/>
        <rect y="22" width="45" height="25" rx="5" fill={darkMode ? "white" : "black"}/>
    </svg>
  )
}

export default Pointer