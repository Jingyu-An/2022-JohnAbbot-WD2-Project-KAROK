import "./App.css"
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/home/Home";

import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div className="App">
         <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Navbar/>
        <Home />
         <Profile/>  */}
         <Auth/> 
    </div>
    
  );
}

export default App;
