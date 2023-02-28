import React from 'react'

export const Arrow = ({darkMode}) => {
  return (
    <div>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 6.375L7.79289 9.91789C8.12623 10.2512 8.29289 10.4179 8.5 10.4179C8.70711 10.4179 8.87377 10.2512 9.20711 9.91789L12.75 6.375" stroke={darkMode ? "#344493" : "#A8A8A8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  )
}

export default Arrow;
