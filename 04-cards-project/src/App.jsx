import Card from "./components/Card"
const App = () => {
  return (
    <div className="parent">
      <Card 
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcD8xeo_O-TaNM2k6N85d23DXoaSukC8D_4iwf42iOPQ&s=10"
      company ="Amazon"
      time = "5 days ago"
      post="Senior UI/UX Designer"
      tag1 = "Part-Time"
      tag2 = "Senior Level"
      pay="$120/hr"
      location = "Mumbai, India"
      />
      <Card
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo51RaSL38xlksvpHe9OoUJhg5oB5vlyKqJm5fjqdgkA&s=10"
      company ="Google"
      time = "30 days ago"
      post="Graphic Designer"
      tag1 = "Part-Time"
      tag2 = "Flexible Schedule"
      pay="$150-220k"
      location = "Kochi, India"
      />
      <Card
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZzuAycKnMmFF2HhTN2iygjirRh5zOpiovaTdBgR00g&s=10"
      company ="Dribble"
      time = "18 days ago"
      post="Senior Motion Designer"
      tag1 = "Contract"
      tag2 = "Remote"
      pay="$85/hr"
      location = "Chennai, India"
      />
      <Card
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAkOU5dJEO2PUvKR2xy4kqBo5bc4ZsADcZueNxqIeZA&s=10"
      company ="Figma"
      time = "5 days ago"
      post="UX Designer"
      tag1 = "Full-Time"
      tag2 = "In office"
      pay = "$200-250k"
      location = "Bangalore, India"
      />
      <Card
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLzivlm-eRcXEJ9Wd3d__6LWQS7Ad9FPgy7Gyp40zXg&s=10"
      company ="Figma"
      time = "5 days ago"
      post="UX Designer"
      tag1 = "Full-Time"
      tag2 = "In office"
      pay = "$200-250k"
      location = "Bangalore, India"
      />
      <Card
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NThIP23bmhDgkx7Q-56cVo9x9epWv7VRvYpFp0GVVw&s=10"
      company ="Airbnb"
      time = "5 days ago"
      post="Graphic Designer"
      tag1 = "Full-Time"
      tag2 = "Flexible Schedule"
      pay = "$85/hr"
      location = "Kerala, India"
      />
    </div>
  )
}

export default App