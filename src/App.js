import { useState, useEffect, createContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import PassedEvents from "./components/EventFolder/PassedEvents";
import CommingEvents from "./components/EventFolder/CommingEvents";
import useTheme from './components/StarterFolder/useTheme';
import Layout from "./components/StarterFolder/Layout";

export const ThemeContext = createContext(null);

function App() {
    const theme = useTheme();
    return (
        <ThemeContext.Provider value={theme}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="events">
                        <Route index element={<CommingEvents />} />
                        <Route path="passedEvents" element={<PassedEvents />} />
                        <Route path="commingEvents" element={<CommingEvents />} />
                    </Route>
                    <Route path="user" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ThemeContext.Provider>
    );
}

export default App;