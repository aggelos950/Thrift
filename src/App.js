import { useState, createContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import PassedEvents from "./components/EventFolder/PassedEvents";
import CommingEvents from "./components/EventFolder/CommingEvents";
import useTheme from './components/StarterFolder/useTheme';
import Layout from "./components/StarterFolder/Layout";
import SignUp from './components/LoginFolder/SignUp';
import Login from './components/LoginFolder/Login';
import Profile from './components/LoginFolder/Profile';
import AdminPanel from './components/AdminFolder/AdminPanel';
import AdminEvents from './components/AdminFolder/AdminEvents';
import AdminUsers from './components/AdminFolder/AdminUsers';


export const ThemeContext = createContext(null);
export const UserContext = createContext(null);

function App() {
    const theme = useTheme();
    const [user,setUser] = useState(localStorage.getItem("user"));

    function updateUser(userName) {
         setUser(userName)
         localStorage.setItem("user",userName);
    }


    return (
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={{user,updateUser}}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="events">
                            <Route index element={<CommingEvents />} />
                            <Route path="passedEvents" element={<PassedEvents />} />
                            <Route path="commingEvents" element={<CommingEvents />} />
                        </Route>
                        <Route path="user" element={<User />} >
                            <Route index element={<Login />} />
                            <Route path="signup" element={<SignUp />} />
                            <Route path="login" element={<Login />} />
                        </Route>
                        <Route  path="profile" element={<Profile />} />
                        <Route path="adminPanel" element ={<AdminPanel />} />
                        <Route path="adminEvents" element={<AdminEvents />} />
                        <Route path="adminUsers" element={<AdminUsers />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;