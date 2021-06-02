import React, { Component } from 'react'
import TapList from './TapList'
import Details from './Details'
import Form from './Form'
import Modal from 'react-modal';
import {editKeg,addKeg, deleteKeg, purchasePint,changeView, changeDetails,changeModal} from '../Actions/index'
import { connect } from 'react-redux';


class Controller extends Component {

  handleShowDetails = (id) => {
    const result = this.props.tapList[id];
    this.props.dispatch(changeDetails(result))
    this.props.dispatch(changeView("Details"))
  }

  handleAddKeg = (tap) => {
    this.props.dispatch(addKeg(tap));
    this.props.dispatch(changeView("TapList"))
  }

  handleDeleteKeg = (id) => {
    this.props.dispatch(deleteKeg(id));
    this.props.dispatch(changeView("TapList"))
  }

  handleEditKeg = (tap) => {
    this.props.dispatch(editKeg(tap));
    this.props.dispatch(changeView("TapList"))
  }

  changeCurrentView = (view) => {
    this.props.dispatch(changeView(view))
  }

  handlePurchasePint = (id) => {
   this.props.dispatch(purchasePint(id))
  }

  openModal = () => {
    this.setIsOpen(true);
  }

  closeModal = () => {
    this.setIsOpen(false);
  }

  setIsOpen = (isOpen) => {
    this.props.dispatch(changeModal(isOpen))
  }

  render() {
    const customStyles = {
      content: {
        top: '33%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "10px"
      }
    };

    const returnToListButton = {
      display: "block",
      width: "65%",
      height: "80px",
      padding: '0',
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "30px",
      borderRadius: "6px",
      cursor: "pointer",
      backgroundColor: "white"
    }

    const detailsButtons = {
      display: "flex",
      height: "70px",
      marginTop: "15px"
    }

    const editAndDeleteButtons = {
      backgroundColor: "white",
      border: "2px solid gray !important",
      cursor: "pointer",
      borderRadius: "3px"
    }

    const deleteButton = {
      backgroundColor: "#e6dcdc"
    }

    const yesAndNoButtons = {
      display: "flex"
    }

    switch (this.props.currentView) {
      case "TapList":
        return (
          <React.Fragment>
            <TapList goToAddForm={this.changeCurrentView.bind(null, "Add")} onPurchasePint={this.handlePurchasePint} onShowDetails={this.handleShowDetails} tapList={this.props.tapList} />
          </React.Fragment>
        )
      case "Details":
        return (
          <React.Fragment>
            <Details details={this.props.details} onEdit={this.changeCurrentView} />
            <div style={detailsButtons} id="details-buttons">
              <button className="edit-and-delete-buttons" style={editAndDeleteButtons} onClick={() => this.changeCurrentView("Edit")}>Edit Keg</button>
              <button className="edit-and-delete-buttons" id="delete" style={{ ...editAndDeleteButtons, ...deleteButton }} onClick={() => this.openModal()} >Delete Keg</button>
            </div>
            <br />
            <button className="return-to-list-button" style={returnToListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
            <Modal
              isOpen={this.props.isOpen}
              appElement={document.getElementById("root")}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
              <form>
                <h3>Are you sure you want to delete this item?</h3>
                <div id="yes-and-no-buttons" style={yesAndNoButtons}>
                  <button onClick={() => { this.handleDeleteKeg(this.props.details.id); this.closeModal() }}>Yes</button>
                  <button onClick={this.closeModal}>No</button>
                </div>
              </form>
            </Modal>

          </React.Fragment>
        )
      case "Add":
        return (
          <React.Fragment>
            <Form edit={{edit:false}} onAddKeg={this.handleAddKeg} />
            <button className="return-to-list-button" style={returnToListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
          </React.Fragment>
        )
      case "Edit":
        return (
          <React.Fragment>
            <Form edit={{edit: true, details: this.props.details }} onEditKeg={this.handleEditKeg} />
            <button className="return-to-list-button" style={returnToListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
          </React.Fragment>
        )
      default:
    }
  }
}

const mapStatetoProps = (state) => {
  return{
    tapList: state.kegs.kegs,
    isOpen: state.interface.isOpen,
    details: state.interface.details,
    currentView: state.interface.currentView
  }
}

export default connect(mapStatetoProps)(Controller);