import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
const App = () => {
    return (
        <>
            <Header />
            <Section />
            <Routes>
                <Route />
            </Routes>   
        </>
    )
};
export default App;