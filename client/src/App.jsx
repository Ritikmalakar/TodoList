import { Route,Routes } from "react-router-dom"
import AddTask from "./component/AddTask"
import Navbar from "./component/Navbar"
import List from "./component/List"
import Update from "./component/Update"


function App() {


  return (
    <>
    <Navbar/>
<Routes>
<Route path="/" element={<List/>}/>
<Route path="/add" element={<AddTask/>}/>
<Route path="/update/:id" element={<Update/>}/>
</Routes>
    </>
  )
}

export default App
