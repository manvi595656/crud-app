import React, { useState, useEffect } from 'react';
import TopBar from '../TopBar/index';
import Tabs from "../Tabs/index"
import {tabData,cardInfo,bottomPanelItems,optionsPanelItems,transactionData} from "../../data/index";
import BottomPanel from "../BottomPanel/index"
import ScrollPanel from "../ScrollPanel/index"
import "./index.scss";
import { connect } from 'react-redux';
import { addCard } from '../../actions';

const Dashboard = ({dispatch}) => {
    useEffect(()=>{
        for(var i=0;i<cardInfo.length;i++) {
            dispatch(addCard(cardInfo[i]))
        }
    },[])
    return (
        <div>
            <div className="topSection">
                <TopBar price={3000}></TopBar>
                <Tabs tabData={tabData} cardInfo={cardInfo}></Tabs>
            </div>
            <div className="scrollPanel">
                <ScrollPanel transactionData={transactionData} optionsPanelItems={optionsPanelItems}></ScrollPanel>
            </div>
            <div className="bottomPanel">
                <BottomPanel bottomPanelItems={bottomPanelItems}></BottomPanel>
            </div>
            
            
        </div>
    )
}


const DashboardMain = connect()(Dashboard)

export default DashboardMain;