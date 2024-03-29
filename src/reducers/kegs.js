import { ADD_KEG, DELETE_KEG, PURCHASE_PINT } from "../Actions/ActionTypes";
import { omit } from 'lodash'

const start = {
  kegs: {
    1: {
      id: 1,
      name: "Sam Goody",
      brand: "Excellence",
      price: 6.95,
      alcoholContent: 8.5,
      pints: 124
    },
    2: {
      id: 2,
      name: "Caviar Island",
      brand: "Partition",
      price: 8.95,
      alcoholContent: 9,
      pints: 124
    }
  }
}

export default function reducer(state = start, action) {
  switch (action.type) {
    case ADD_KEG:
      const id = action.keg.id
      return { ...state, kegs: { ...state.kegs, [id]: { ...action.keg } } }
    case DELETE_KEG:
      let newKegs = omit(state.kegs, action.id);
      return { ...state, kegs: { ...newKegs } }
    case PURCHASE_PINT:
      if (state.kegs[action.id].pints !== 0) {
        let newPints = state.kegs[action.id].pints - 1;
        return { ...state, kegs: { ...state.kegs, [action.id]: { ...state.kegs[action.id], pints: newPints } } }
      }
      return state;
    default:
      return state;
  }
}