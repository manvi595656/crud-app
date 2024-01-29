import React, { useState, useEffect } from 'react';
import Account from "./asset/Account.svg";
import Credit from "./asset/Credit.svg";
import LogoBottom from "./asset/LogoBottom.svg";
import Pay from "./asset/Pay.svg";
import Payments from "./asset/Payments.svg";
import "./index.scss";

const BottomPanel = ({bottomPanelItems}) => {
    const listItems = bottomPanelItems.map((elem) => (
        <span key = {elem.id} className='bottomIcon'>
            {
                elem.icon == "LogoBottom"?  <img className="bottomImageIcon" src = {LogoBottom} />:
                elem.icon == "Pay" ? <img className="bottomImageIcon" src = {Pay} />:
                elem.icon == "Payments"? <img className="bottomImageIcon" src = {Payments} />:
                elem.icon == "Credit"? <img className="bottomImageIcon" src = {Credit} />:
                <img className="bottomImageIcon" src = {Account} />
            }
            <div className={`bottomPanelText ${elem.isActive == true && 'bottomIconSelected'}`}>{elem.name}</div>
        </span>
      ));
  

    return (
        <div className='BottomContainer'>
            {listItems}
        </div>
    );
}
export default BottomPanel;
