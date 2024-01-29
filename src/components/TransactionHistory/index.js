import React, { useState, useEffect } from 'react';
import File from "./asset/file.svg";
import Business from "./asset/business.svg";
import Next from "./asset/next.svg";
import "./index.scss";


const TransactionHistory = ({transactionData}) => {

    const dataListing = transactionData.map((elem) => (
        <div key = {elem.id} className="dispFlex transactionOuter">
            <span className='circleOuter'>            
                <img className='mar16' src = {File} />
            </span>
            <span>
                <div className='transactionName'>{elem.name}</div>
                <div className='transactionDate'>{elem.date}</div>
                <div className='dispFlex marTop12'>
                    <span className='businessIcon' >
                        <img className='businessIconImg' src = {Business} />
                    </span>
                    
                    <span className='debitText'> 
                        {`${elem.type == "debit"?"Charged to":"Refund on"} debit card`}  
                    </span>
                </div>   
            </span>
            <span className='priceSection'>
                <span className={`priceText ${elem.type == "credit" && "priceCreditText"}`}>
                    {`${elem.type == "debit"?"-S$":"+S$"} ${elem.price}`}  
                </span>
                <img src = {Next} />
            </span>
        </div>
      ));
    return (
        <div className='marBottom56'>
            {dataListing}
        </div>
    )

};


export default TransactionHistory;