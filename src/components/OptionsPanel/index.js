import React, { useState, useEffect } from 'react';
import FreezeCard from "./asset/FreezeCard.svg";
import SetSpendLimit from "./asset/SetSpendLimit.svg";
import GPay from "./asset/GPay.svg";
import ReplaceCard from "./asset/ReplaceCard.svg";
import DeactivateCard from "./asset/DeactivateCard.svg";
import "./index.scss";
import { connect } from 'react-redux';
import { removeCard , freezeCard, unFreezeCard} from '../../actions';


const Options = ({optionsPanelItems,dispatch}) => {
    const [freezeStatus,setFreezeStatus] = useState(true);


    const deactivateCard = () => {
        var elemList = document.getElementsByClassName("scrollCard");
        var lowestCardId = elemList[0].id.split("_")[1];
        var lowestCardIdOffset = Math.abs(elemList[0].getBoundingClientRect().left);
        for(var i=0;i<elemList.length;i++) {
            let leftPosition = Math.abs(elemList[i].getBoundingClientRect().left);
            if(leftPosition<lowestCardIdOffset) {
                lowestCardIdOffset = elemList[i].getBoundingClientRect().left;
                lowestCardId = elemList[i].id.split("_")[1];
            }
        }
        dispatch(removeCard(parseInt(lowestCardId)));
    }
    const freezeUnfreezeCard = () => {
        var elemList = document.getElementsByClassName("scrollCard");
        var lowestCardId = elemList[0].id.split("_")[1];
        var lowestCardIdOffset = Math.abs(elemList[0].getBoundingClientRect().left);
        var classNames = elemList[0].className;
        for(var i=0;i<elemList.length;i++) {
            let leftPosition = Math.abs(elemList[i].getBoundingClientRect().left);
            if(leftPosition<lowestCardIdOffset) {
                lowestCardIdOffset = leftPosition;
                lowestCardId = elemList[i].id.split("_")[1];
                classNames = elemList[i].className;
            }
        }

        if(freezeStatus) {
            dispatch(freezeCard(parseInt(parseInt(lowestCardId))));
            setFreezeStatus(false);
        } else {
            if(classNames.indexOf("opa40")>-1) {
                dispatch(unFreezeCard(parseInt(parseInt(lowestCardId))));
                setFreezeStatus(true);
            }
        }
    }

    const processCard = (elem)=> {
        if(elem.icon == "DeactivateCard" ) {
            deactivateCard();
        } else if(elem.icon == "FreezeCard") {
            freezeUnfreezeCard();
        }  
    }

    const listItems = optionsPanelItems.map((elem) => (
        <span key = {elem.id} 
        onClick={()=>processCard(elem)}
        className='optionsIcon'>
            {
                elem.icon == "FreezeCard"?  <img className="optionsImageIcon" src = {FreezeCard} />:
                elem.icon == "SetSpendLimit" ? <img className="optionsImageIcon" src = {SetSpendLimit} />:
                elem.icon == "GPay"? <img className="optionsImageIcon" src = {GPay} />:
                elem.icon == "ReplaceCard"? <img className="optionsImageIcon" src = {ReplaceCard} />:
                <img className="optionsImageIcon" src = {DeactivateCard} />
            }
            <div className="OptionsPanelText">{
                elem.secondName && freezeStatus==false?elem.secondName:elem.name
            }</div>
        </span>
      ));
  

return (
    <div className='optionsTab'>
        {listItems}
    </div>
)
};

const OptionsPanel = connect(
    )(Options)

export default OptionsPanel;