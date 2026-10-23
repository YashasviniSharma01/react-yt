import Card from "./components/Card"
const App = () => {
  return (
    <div className='parent'>
      <Card 
      user="Yash Sharma" 
      image="https://images.unsplash.com/photo-1788080567027-cdfc4ba881fe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"/>
      <Card 
      user="Yashasvini Sharma" 
      image="https://images.unsplash.com/photo-1787616311329-09b59f15899c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"/>
      <Card 
      user="Aditya Tiwari" 
      image="https://images.unsplash.com/photo-1779896412420-d37179cdffb9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"/>
      <Card 
      user="Tushi Sharma" 
      image="https://images.unsplash.com/photo-1595389910742-5b5c0e958a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D8"/>

    </div>
  )
}

export default App