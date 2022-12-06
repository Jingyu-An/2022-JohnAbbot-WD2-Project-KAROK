import "./App.css"
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/home/Home";
import Contact from './pages/Contact/Contact';

import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      {/*<Profile/>*/}
    </div>
  );
}

export default App;
