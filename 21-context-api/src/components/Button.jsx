import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
  return (
    const changeTheme = ()=>{
        const [setTheme()] = useContext(ThemeDataContext)
    }
    <div>
        <button onClick={()=>{
                setTheme('Dark')
        }}>Change Theme</button>
    </div>
  )
}

export default Button