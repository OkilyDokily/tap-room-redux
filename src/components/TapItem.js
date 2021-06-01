import React from 'react';
import PropTypes from 'prop-types';

TapItem.propTypes = {
  details: PropTypes.object,
  showDetails:PropTypes.func,
  purchasePint:PropTypes.func
};


const button = {
  width: "90%",
  float:"right",
  display: "block",
  textAlign: "center",
  justifySelf: "center",
  color: "white",
  backgroundColor: "red",
  userSelect: "none",
  fontFamily: "'Times New Roman' !important",
  fontWeight: "normal !important"
}

const div = {
  width: "100%",
  minWidth: "content",
  fontFamily: 'Gruppo',
  fontWeight: "bold"
}

const contents = {
  display: "contents"
}

const lastBottom = {
  width: "auto !important",
  whiteSpace: "nowrap",
  maxWidth:"content !important"
}

function TapItem(props) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  return (
    <React.Fragment>
      <div style={contents} className="contents">
        <div style={div} onClick={() => props.showDetails(props.details.id)}>{props.details.name}</div>
        <div style={div} onClick={() => props.showDetails(props.details.id)}>{props.details.brand}</div>
        <div style={div} onClick={() => props.showDetails(props.details.id)}>{formatter.format(props.details.price)}</div>
        <div style={div} onClick={() => props.showDetails(props.details.id)}>{props.details.alcoholContent.toFixed(1)}</div>
        <div style={{...div,...lastBottom}} onClick={() => props.showDetails(props.details.id)}>{(props.details.pints <= 0) ? "Out Of Stock" : (props.details.pints)}</div>
      </div>
      <div id="item-button" style={{ ...div, ...button }} onClick={(e) => { e.stopPropagation(); props.purchasePint(props.details.id) }}>
        Purchase Pint
      </div>

    </React.Fragment>
  );
}

export default TapItem;