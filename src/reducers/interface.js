import {CHANGE_VIEW, CHANGE_DETAILS,CHANGE_MODAL} from '../Actions/ActionTypes'


const start = {
  details: null,
  currentView: "TapList",
  isOpen: false
}


export default function reducer(state = start,action){
  switch(action.type){
    case CHANGE_VIEW:
      return {...state,currentView:action.view}
    case CHANGE_DETAILS:
      return {...state,details:action.obj}
    case CHANGE_MODAL:
      return {...state,isOpen:action.bool}
    default:
      return state;
  }
} 