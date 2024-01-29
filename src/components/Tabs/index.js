import React, { useState, useEffect } from 'react';
import "./index.scss";
import DebitCardSection from '../DebitCardSection';


const Tabs = ({tabData,cardInfo}) => {

    const [active,setActive] = useState(1);

    const changeTab = (data) => {
        if(data.functional) {
            setActive(data.id); 
        }
    };

    const tabItems = tabData.map((data)=>(
        <div key = {data.id} 
        className={`tabItemSection ${active == data.id && 'tabItemSelected'}`}
        onClick={()=>changeTab(data)}
        >
            {data.name}
        </div>
    ));
    return (
        <>
        <div className='dispFlex tabSection'>
            {tabItems}
        </div> 
        {active == 1 && <DebitCardSection cardInfo={cardInfo}></DebitCardSection>}
        </>
    )

};

export default Tabs;