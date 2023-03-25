import React, {useState} from 'react';
import './App.css'
import Header from "./companents/Header/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./companents/pages/Product/Product";
import Favorite from "./companents/pages/Favorite/Favorite";
import Basket from "./companents/pages/basket/Basket";

const App = () => {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('dark')) || false)

    function getDark() {
        setDark(!dark)
        localStorage.setItem('dark',JSON.stringify(!dark))
    }

    return (
        <div style={{
            background: dark ? '#26BDA4' : '',
            color: dark ? '#FFF' : '#FFF'
        }}>
            <Header getDark={getDark} dark={dark}/>
            <Routes>
                <Route path={'/'} element={<Product/>}/>
                <Route path={'/favorite'} element={<Favorite/>}/>
                <Route path={'/basket'} element={<Basket/>}/>
            </Routes>
        </div>
    );
};

export default App;