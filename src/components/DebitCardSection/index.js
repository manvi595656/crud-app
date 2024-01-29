import React, { useState, useEffect } from 'react';
import Eye from "./asset/Eye.svg";
import LogoBig from "./asset/LogoBig.svg";
import VisaLogo from "./asset/VisaLogo.svg";
import "./index.scss";
import { connect } from 'react-redux';
import { addCard } from '../../actions';

const DebitCard = ({cards}) => {

    useEffect(()=>{
        //console.log("cards",cards.present);
    },[cards])

    const Cards = cards.present.map((data,index)=>(
        <div key = {data.id} id={`card_${data.id}`} 
        className={`scrollCard ${data.isActive ==false && "opa40"}`}
        onClick={()=>changeTab(data)}
        >
            <div className='dispFlex showNumberCard'>
                <img className='showNumberCardIcon' src = {Eye} />
                <div>Show card number</div>
            </div>
            <div className={`mainCard ${data.id%2==0?"greenCard":"blueCard"}`}>
                <img className='logoBig' src = {LogoBig} />
                <div className='cardName'>{data.name}</div>
                <div className='cardNumber'><span className='dottedCardNumber'>....  ....  ....</span><span>{data.cardNumber.slice(12)}</span></div>
                <div className='cardValidity'>Thru: {data.validity}</div>
                <div className='cvvText'>CVV:</div>
                <div className='cvvVal'>***</div>
                <img className='visaIcon' src = {VisaLogo} />
            </div>
        </div>
    ));

    return (
        <div className='scrollTab'>
            <div className='dispFlex'>
                {Cards}
            <div className='visbHidden'>sp</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state,ownProps) => ({
    cards:state
  })


const DebitCardSection = connect(
    mapStateToProps
    )(DebitCard)

export default DebitCardSection;