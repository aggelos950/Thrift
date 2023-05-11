import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import User from "./pages/User";


function App(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="events" element={<Events />}/>
            <Route path="user" element={<User />}/>
        </Routes>
    );
}

export default App;