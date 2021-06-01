import {ADD_KEG,DELETE_KEG} from './ActionTypes'

export function addKeg(keg){
  return {
    type:ADD_KEG,
    keg:keg
  }
}

export function editKeg(keg){
  return {
    type:ADD_KEG,
    keg:keg
  }
}
 
export function deleteKeg(id){
  return{
    type:DELETE_KEG,
    id:id
  }
}