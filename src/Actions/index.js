import { ADD_KEG, DELETE_KEG, PURCHASE_PINT, CHANGE_VIEW, CHANGE_DETAILS, CHANGE_MODAL } from './ActionTypes'

export function addKeg(keg) {
  return {
    type: ADD_KEG,
    keg
  }
}

export function editKeg(keg) {
  return {
    type: ADD_KEG,
    keg
  }
}

export function deleteKeg(id) {
  return {
    type: DELETE_KEG,
    id
  }
}

export function purchasePint(id) {
  return {
    type: PURCHASE_PINT,
    id
  }
}


//interface
export function changeView(view) {
  return {
    type: CHANGE_VIEW,
    view
  }
}

export function changeDetails(obj) {
  return {
    type: CHANGE_DETAILS,
    obj
  }
}

export function changeModal(bool) {
  return {
    type: CHANGE_MODAL,
    bool
  }
}