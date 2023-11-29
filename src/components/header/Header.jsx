import React,{useState,useEffect} from "react";
import {Link,NavLink} from "react-router-dom";
import "../font-awesome-4.7.0/css/font-awesome.min.css";
import "./header.css";
const Header=()=>{
    const [btnStatus,setBtnStatus]=useState(false);
    const btnOff=()=>{
        if(btnStatus===true){
            setBtnStatus(false);
        }
        else{
            setBtnStatus(true);
        }
    }
    useEffect(()=>{
        const menuBar=document.querySelector(".menu");
        if(btnStatus===true){
            menuBar.classList.add("active");
            
        }
        else{
            menuBar.classList.remove("active");
        }
    })
    useEffect(()=>{
        const menuBar=document.querySelector(".menu");
        document.onclick=function(e){
            if (e.target.className !== "btn-menu") {
                setBtnStatus(false)
            
            }
        }
    })
    return(
        <>
        <div className="header">
            <div className="container">
                <div className="head">
                    <div className="blok-1">
                        <span><i className="fa fa-phone" aria-hidden="true"></i> +998 93 095 95 95</span>
                        <span><i className="fa fa-envelope-o" aria-hidden="true"></i> TMS@gmail.com</span>
                        <span><a target="_blank" href="https://t.me/TrackMonitoringGps"><i className="fa fa-telegram" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://www.instagram.com/gpsnukus/"><i className="fa fa-instagram    " aria-hidden="true"></i></a></span>

                    </div>
                    <div className="logo">
                        <img src="/TMS.png" alt="" />
                    </div>
                    <div className="btn">
                    <a href="#zayavka" className="btn-menu">Оставить заявку</a>
                    <button className="btn-menu" onClick={()=>{btnOff()}}>Меню</button>
                    <div className="menu">
                        <ul>
                            <a href="#1">О компании</a>
                            <a href="#2">Программное обеспечение</a>
                            <a href="#3">Возможности</a>
                            <a href="#4">Оборудование</a>
                        </ul>
                    </div>      
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;