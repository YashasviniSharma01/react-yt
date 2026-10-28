import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }} className="bg-cyan-500 my-5 mx-2 p-2 rounded font-bold cursor-pointer active:scale-95 ">Back to home page</button>
      <button onClick={()=>{
        navigate(-1)
      }} className="bg-cyan-500 my-5 mx-2 p-2 rounded font-bold cursor-pointer active:scale-95 ">Go Back Simone</button>
      <button onClick={()=>{
        navigate(+ 1)
      }} className="bg-cyan-500 my-5 mx-2 p-2 rounded font-bold cursor-pointer active:scale-95 ">Go Forward Simone</button>
    </div>
  )
}

export default Navbar2