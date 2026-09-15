import './App.css'
import About from './About'

function App() {
  // khai báo 1 object user
  const user1 = {
    name: "NgocNHAN",
    email: "dongocnhan345@gmail.com"
  }
  
  const user2 = {
    name: "nhan",
    email: "dongocnhan345@gmail.com"
  }

  return (
    <>
      <About user={user1} />
      <About user={user2} />
    </>
  )
}

export default App;