import React, { useState, useEffect } from 'react';
import Logo from "./asset/Logo.svg"; 
import Box from "./asset/box.svg";
import "./index.scss";
import CardInputDailogue from "../CardInputDailogue/index";

const TopBar = ({price}) => {

    const [openModel,setOpenModel]= useState(false);

    const addNewCard = () => {
        setOpenModel(true);
    }
    const closeModel = () => {
        setOpenModel(false);
    }

    const [formattedPrice, setFormattedPrice] = useState("");

    useEffect(()=>{
        var nf = new Intl.NumberFormat();
        setFormattedPrice(Intl.NumberFormat("en-US").format(price));
    },[]);

    return(
        <>
        <div className="topHeading">Account balance</div>
        <img className='logo' src={Logo} alt="Logo" />
        <div className='dispFlex'>
            <div className='greenIcon'>S$</div>
            <div className='price'>{formattedPrice}</div>
            <div onClick={()=>addNewCard()} className='dispFlex newCardWrapper'>
                <img src={Box} alt="Box"/>
                <button className='newCard'>New Card</button>
            </div>
            {openModel && <CardInputDailogue closeModel={closeModel}></CardInputDailogue>}
        </div>
        </>

    )
};

export default TopBar;