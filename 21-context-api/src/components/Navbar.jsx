import { useContext } from "react"
import Nav2 from "./Nav2" 
import { ThemeDataContext } from "../context/ThemeContext"

const Navbar = () => {

  const data = useContext(ThemeDataContext)
  return (
    <div className='nav'>
        <h2> Yashasvini </h2>
        <Nav2 data = {data} />
    </div>
  )
}

export default Navbar