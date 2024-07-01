import Backgroundchange from "./components/Backgroundchange";
import Imageview from "./components/Imageview";
import Tabs from "./components/Tabs";
import Toggle from "./components/Toggle";
import Mainpage from "./pages/Mainpage";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
   <Mainpage/>
   <Routes>
        <Route path="/backgroundchange" element ={<Backgroundchange/>} /> 
        <Route path="/toggle" element ={<Toggle/>} /> 
        <Route path="/imageview" element ={<Imageview/>} /> 
        <Route path="/tabs" element ={<Tabs/>} /> 
      </Routes>

   </>
  );
}

export default App;
