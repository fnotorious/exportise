import React from 'react'

export const Menu = ({darkMode}) => {
  return (
    <div>
        <svg width="22" height="18" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L17 1" stroke={darkMode ? "#344493" : "#A8A8A8"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 8L17 8" stroke={darkMode ? "#344493" : "#A8A8A8"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 15L17 15" stroke={darkMode ? "#344493" : "#A8A8A8"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  )
}

export default Menu;
