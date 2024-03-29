import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Login';
import NotFound from './pages/NotFound';
import PageLayout from './pages/PageLayout';
import AllCrafts from './pages/AllCrafts'
import Login from './pages/Login';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                {/* Navigation bar */}
               

                {/* Main content */}
                <Routes>
                    <Route path='/' element={<PageLayout />} >
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path='/allcrafts' element={<AllCrafts />} />
                        <Route path="*" element={<NotFound />} /> 
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
