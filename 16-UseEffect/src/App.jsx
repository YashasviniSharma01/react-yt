import { useState } from "react";
import { useEffect } from "react"


const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(() => {
  console.log('use effect is running...');   
},[num2])
  

  return (
    <div>
      <h1>num is {num}</h1>
      <h1>num2 is {num2}</h1>
      <button onClick={()=>{
        setnum(num+1);
        
      }}
      onDoubleClick={()=>{
        setnum2(num2+10)
      }}
      >click</button>
    </div>
  )
}

export default App