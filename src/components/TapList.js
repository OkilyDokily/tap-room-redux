import React from 'react';
import PropTypes from 'prop-types';
import TapItem from './TapItem'

TapList.propTypes = {
  tapList: PropTypes.object,
  onPurchasePint:PropTypes.func,
  showDetails: PropTypes.func,
  goToAddForm: PropTypes.func
};

const tapList = {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 100px 1fr",
  alignItems: "end",
  justifyItems: "start",
  gridAutoRows: "20px",
  gridRowGap: "3px"
}

const bottomLine = {
  width: "100%",
  minWidth: "content",
  fontFamily: 'Space Mono',
  fontSize:"12px",
  borderBottom: "1px solid black"
}

const lastBotton = {
  width: "90%",
  minWidth: "content",
  fontSize: "12px",
  fontFamily: 'Space Mono',
  borderBottom: "1px solid black"
}

const tapListButton = {
  gridColumn: "1/-1",
  width: "100%",
  gridRow: "auto/span 2",
  height: "100%",

  //styles
  fontWeight:"bold",
  cursor: "pointer",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #BEBEBE",
  borderRadius: "3px"
}


function TapList(props) {
  return (
    <div id="tap-list" className="tap-item-details" style={tapList} >
      <div style={bottomLine}>Name</div>
      <div style={bottomLine}>Brand</div>
      <div style={bottomLine}>Price</div>
      <div style={bottomLine}>Alcohol Content in %</div>
      <div style={lastBotton}>Pints Left</div>
      <div></div>
      {Object.keys(props.tapList).map(x => <TapItem key={props.tapList[x].id} purchasePint={props.onPurchasePint} showDetails={props.onShowDetails} details={props.tapList[x]} />)}
      <div></div>
      <button id="add-keg" style={tapListButton} onClick={props.goToAddForm}>Add Keg</button>
    </div>
  );
}

export default TapList;