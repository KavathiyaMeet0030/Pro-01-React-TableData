import { Route, Routes } from "react-router"
import DashBord from "./Components/DashBord/DashBord";
import AddData from "./Components/AddData/AddData";
import Edit from "./Components/Edit/Edit";
import MyHeader from "./Components/Header/MyHeader";

function App() {  


  return (
    <>
      
    <MyHeader/>
     
        <Routes>
           <Route path='/' element={<DashBord />}/>
           <Route path="/adddata" element={ <AddData />}/>
           <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
    </>
  )
}

export default App
