import React, { useState, useEffect } from 'react';
import "./index.scss";
import Close from "./asset/Close.svg";
import { connect } from 'react-redux';
import { addCard } from '../../actions';

const CardInput = ({closeModel,dispatch}) => {

    const [errorMsg,setErrorMsg] = useState("");

    const submitModal = (e) => {
       
        e.preventDefault();
        setErrorMsg("");
        if( validateCreditCardNumber(e.target[0].value) && 
        validateValidity(e.target[2].value) && 
        validateName(e.target[1].value)) {
            var data = {
                name: e.target[1].value,
                cardNumber: e.target[0].value,
                validity: e.target[2].value,
                type: "visa",
                isActive: true
            }
            dispatch(addCard(data));
            closeModel();
        }

    };

    const validateCreditCardNumber = (cardVal)=> 
    {
        var re16digit = /^\d{16}$/
        if (cardVal.search(re16digit) == -1) {
            setErrorMsg("Please enter your 16 digit credit card numbers & submit again");
            return false;
        }
        return true;
    }

    const validateValidity = (validity) => {
       var monthYearArr = validity.split("/");
       if(monthYearArr.length!=2) {
        setErrorMsg("Please enter validity month and year correctly (MM/YY) & submit again");
        return false;
       } else {
            if(monthYearArr[0]>12 || monthYearArr[0]<0) {
                setErrorMsg("Please enter validity month correctly & submit again");
                return false;
            }
            else if(monthYearArr[1]<new Date().toLocaleDateString('en', {year: '2-digit'})) {
                setErrorMsg("Please enter validity year correctly & submit again");
                return false;
            }   
       }
       return true;

    }    

    const validateName = (nameVal) => {
        var nameRegex =  /^[a-zA-Z ]+$/
        if (nameVal.search(nameRegex) == -1) {
            setErrorMsg("Please enter your name correctly & submit again");
            return false;
        }
        return true;
    }

    return (
        <div>
            <div className='modalContainer'></div>
            <form className='cardInputModal' onSubmit={(e)=>submitModal(e)}>
                <img className='closeBtn' src ={Close} onClick={closeModel} />
                {errorMsg.length>0 && <div className='errorMsg'>{errorMsg}</div>}
                <div><div>Card Number:</div> <input type="text" className='modelCardNumber' /></div>
                <div><div>Card Holder Name:</div><input  type="text" className='modelCardName' /> </div>
                <div><div>Validity(MM/YY): </div><input type="text" className='modelMonthYear' /></div>
                <button className='modalSubmitBtn'>Submit</button>
            </form>
        </div>

    );

};

const CardInputDailogue = connect(
    )(CardInput)

export default CardInputDailogue;