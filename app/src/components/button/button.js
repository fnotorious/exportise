import React from 'react'
import styles from './button.module.css'
import { useNavigate } from 'react-router-dom';

const Button = ({name = "name", navigateTo = '/'}) => {
  const navigate = useNavigate();                                 // To navigate to home page

  const handleClick = () => {
    navigate(navigateTo);
  }

  return (
    <button className={styles.button} onClick={handleClick}>{name}</button>
  )
}

export default Button;
