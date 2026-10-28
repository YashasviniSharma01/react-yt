import { Route,Routes } from "react-router-dom"


const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element="home"/>
        <Route path="/about" element="about"/>
        <Route path="/contact" element="contact"/>
      </Routes>

    </div>
  )
}

export default App