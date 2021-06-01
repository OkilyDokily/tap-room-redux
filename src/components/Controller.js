import React, { Component } from 'react'
import TapList from './TapList'
import Details from './Details'
import Form from './Form'
import Modal from 'react-modal';
import {editKeg,addKeg,deleteKeg} from '../Actions/index'
import { connect } from 'react-redux';


class Controller extends Component {
  constructor() {
    super()
    this.state = {
      details: null, //object
      currentView: "TapList",
      isOpen: false
    }
  }

  handleShowDetails = (id) => {
    const result = this.state.tapList.filter(x => x.id === id)[0];
    this.setState({ details: result });
    this.setState({ currentView: "Details" });
  }

  handleAddKeg = (tap) => {
    this.setState({ currentView: "TapList" })
  }

  handleDeleteKeg = (id) => {
    this.setState({ currentView: "TapList" })
  }

  handleEditKeg = (tap) => {
    this.props.dispatch(editKeg(obj));
    this.setState({ currentView: "TapList" })
  }

  changeCurrentView = (view) => {
    this.setState({ currentView: view })
  }

  handlePurchasePint = (id) => {
    const result = this.state.tapList.filter(x => x.id === id)[0];
    result.pints--;
    if (result.pints < 0) {
      result.pints++;
      this.setState({ Pints: result.pints })
      return;
    }
    this.setState({ Pints: result.pints })
  }

  openModal = () => {
    this.setIsOpen(true);
  }

  closeModal = () => {
    this.setIsOpen(false);
  }

  setIsOpen = (isOpen) => {
    this.setState({ isOpen: isOpen });
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

    switch (this.state.currentView) {
      case "TapList":
        return (
          <React.Fragment>
            <TapList goToAddForm={this.changeCurrentView.bind(null, "Add")} onPurchasePint={this.handlePurchasePint} onShowDetails={this.handleShowDetails} tapList={this.state.tapList} />
          </React.Fragment>
        )
      case "Details":
        return (
          <React.Fragment>
            <Details details={this.state.details} onEdit={this.changeCurrentView} />
            <div style={detailsButtons} id="details-buttons">
              <button className="edit-and-delete-buttons" style={editAndDeleteButtons} onClick={() => this.changeCurrentView("Edit")}>Edit Keg</button>
              <button className="edit-and-delete-buttons" id="delete" style={{ ...editAndDeleteButtons, ...deleteButton }} onClick={() => this.openModal()} >Delete Keg</button>
            </div>
            <br />
            <button className="return-to-list-button" style={returnToListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
            <Modal
              isOpen={this.state.isOpen}
              appElement={document.getElementById("root")}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
              <form>
                <h3>Are you sure you want to delete this item?</h3>
                <div id="yes-and-no-buttons" style={yesAndNoButtons}>
                  <button onClick={() => { this.handleDeleteKeg(this.state.details.id); this.closeModal() }}>Yes</button>
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
            <Form edit={{edit: true, details: this.state.details }} onEditKeg={this.handleEditKeg} />
            <button className="return-to-list-button" style={returnToListButton} onClick={() => this.changeCurrentView("TapList")}>Return to List</button>
          </React.Fragment>
        )
      default:
    }
  }
}

export default connect()(Controller);