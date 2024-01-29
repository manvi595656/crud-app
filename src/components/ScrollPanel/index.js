import React, { useState, useEffect } from 'react';
import OptionsPanel from "../OptionsPanel/index";
import "./index.scss";
import DownArrow from "./asset/DownArrow.svg";
import GroupIcon from "./asset/GroupIcon.svg"
import TransactionHistory from "../TransactionHistory/index";

const ScrollPanel = ({transactionData,optionsPanelItems}) => {
return (
    <div>
        <OptionsPanel optionsPanelItems={optionsPanelItems}></OptionsPanel>
        <div className='scrollMainSection'>
            
            <div className="boxSection">
                <img src = {GroupIcon} />
                <span className='boxSectionText'>Card details</span>
                <img className='floatRight' src = {DownArrow} />
            </div>
            <div className="boxSection">
                <img src = {GroupIcon} />
                <span className='boxSectionText'>Recent transactions</span>
                <img className='floatRight' src = {DownArrow} />
            </div>
            <TransactionHistory transactionData={transactionData}></TransactionHistory>
        </div>
    </div>
)
};

export default ScrollPanel;