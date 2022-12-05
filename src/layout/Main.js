import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header'
const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;