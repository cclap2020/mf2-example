import {
  Route,
  Routes,
  Link
  } from "react-router-dom";
import './App.css'

import Shell from "./Shell";
  import App1Page from "./pages/App1Page";
  import HostPage from "./pages/HostPage";

  const App = () => {
return (
  <>
  <div style={{padding: '2rem'}}><Shell /></div>
  <Routes>
  <Route  path="/" element={<><HostPage /></>} /> 
  <Route  path="/app1" element={<><App1Page /></>}> 
  </Route> 
  </Routes>
  
  </>
)


}
  

export default App