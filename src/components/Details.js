import React from 'react';
import PropTypes from 'prop-types';

Details.propTypes = {
  details:PropTypes.object,
};


function Details(props) {

  const detailsDiv = {
    display: "grid",
    fontFamily: 'Gruppo',
    fontWeight:"bold",
    width: "100%",
    marginBottom: "4px",
    padding: "4px",
    paddingRight: "0",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"
  }

  const nameDiv = {
    ...detailsDiv,
    border:"none",
    fontFamily: 'space mono',
    fontWeight:"normal",
    fontSize:"12px",
    borderBottom:"solid black 1px"
  }

  return (
    <div id="details">
      <div style={nameDiv} >
        <div>Name</div>
        <div>Brand</div>
        <div>Price</div>
        <div>Alcohol Content in %</div>
        <div>Pints Left</div>
      </div>
      <div style={detailsDiv}>
        <div>{props.details.name}</div>
        <div>{props.details.brand}</div>
        <div>{props.details.price}</div>
        <div>{props.details.alcoholContent}</div>
        <div>{(props.details.pints <= 0) ? "Out Of Stock" :  props.details.pints}</div>
      </div>
    </div>

  );
}

export default Details;