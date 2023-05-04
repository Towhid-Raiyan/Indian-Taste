import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { MoonLoader } from "react-spinners";

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
           <Header></Header>
           <div>{navigation.state === 'loading' && <MoonLoader color="#36d7b7" /> }</div>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Main;