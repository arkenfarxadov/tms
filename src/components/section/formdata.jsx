import axios from "axios";
import React, { useEffect } from "react";

const TOKEN="5681854911:AAGZ61kjD2Abdd7vfWXllxMKoZXot-fchaI";
const CHAT_ID="-1001893866388";
const URI_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("contact-form").addEventListener('click',function(e){
    e.preventDefault();
    let mes='<b>Новая заявка:</b>\n'
    mes+=`<b>Имя Фамилия: </b>${this.surname.value}\n`;
    mes+=`<b>Email: </b>${this.email.value}\n`;
    mes+=`<b>Номер телефона: </b>${this.phoneNumber.value}\n`;

    axios.post(URI_API,{
        chat_id:CHAT_ID,
        parse_mod:"HTML",
        text:mes
    })
    .then((e)=>{
        this.surname.value="";
        this.email.value="";
        this.phoneNumber.value="";
        alert("Заявка оставлено");
    })
    .catch((error)=>{
        console.log("12312312");
    })
    .finally((fin)=>{

    })
})