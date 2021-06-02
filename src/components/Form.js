import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

Form.propTypes = {
  edit: PropTypes.object,
  onAddKegs: PropTypes.func
};

export default function Form(props) {
  
  const addAKeg = (e) => {
    e.preventDefault();
    let obj =
    {
      id: (props.edit.edit) ? props.edit.details.id : v4(),
      name: document.getElementById("name").value,
      brand: document.getElementById("brand").value,
      price: parseFloat(document.getElementById("price").value),
      alcoholContent: parseFloat(document.getElementById("alcoholcontent").value),
      pints: (props.edit.edit) ? parseInt(document.getElementById("pints").value) : 124,
    }
    if (props.edit.edit) {
      props.onEditKeg(obj);
    }
    else {
      props.onAddKeg(obj);
    }
  }

  const formStyle = {
    margin: "auto",
    textAlign: "center"
  }

  const kegAddEditButton = {
    width: "206px",
    marginTop: "16px",
    padding: "10px",
    backgroundColor: "white",
    cursor: "pointer"
  }

  return (

    <form style={formStyle} onSubmit={addAKeg}>
      <input placeholder="Name" type="text" id="name" defaultValue={props.edit.edit ? props.edit.details.name : null} required />
      <input placeholder="Brand" type="text" id="brand" defaultValue={props.edit.edit ? props.edit.details.brand : null} required />
      <input placeholder="Price" type="number" step="0.01" id="price" defaultValue={props.edit.edit ? props.edit.details.price : null} required />
      <input placeholder="Alcohol Content in %" type="number" step="0.1" id="alcoholcontent" defaultValue={props.edit.edit ? props.edit.details.alcoholContent : null} required />
      {props.edit.edit ? <input type="number" step="1" id="pints" defaultValue={props.edit.details.pints} required /> : null}
      <input style={kegAddEditButton} type="submit" id="keg-add-edit-button" value={props.edit.edit ? "Edit Keg" : "Add Keg"} />
    </form>

  );
}

