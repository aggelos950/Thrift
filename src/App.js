import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import PassedEvents from "./components/PassedEvents";
import CommingEvents from "./components/CommingEvents";


function App(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="events" element={<Events />}>
                <Route index element={<CommingEvents />} />
                <Route path="passedEvents" element={<PassedEvents />}/>
                <Route path="commingEvents" element={<CommingEvents />}/>
            </Route>
            <Route path="user" element={<User />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default App;