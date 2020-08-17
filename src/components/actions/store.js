import { Subject } from 'rxjs';
// import Services from './Services'
import uuid from 'uuid/v4'

const subject = new Subject();
// const ServiceModel =  new Services();

const initialState = {
  data: [],
  newDataCount: 0
};

let state = initialState;

const islandStore = {
  init: () => {
    state = {...state}
    subject.next(state)
  },

  subscribe: setState => subject.subscribe(setState),

  getVillagers: () => {
    subject.next(state);
  },

  addVillager: villager => {
    villager._id = uuid()
    villager.status = "insert"
    state = {
      ...state,
      data: [...state.data, villager],
      newDataCount: state.newDataCount + 1
    }
    subject.next(state);
  },

  updateVillager: villager => {
    villager.status = "update"
    const index = state.data.findIndex((element) =>{
      return element._id === villager._id
    })

    state.data[index] = villager

    subject.next(state);
  },

  removeVillager: villager =>{
    villager.status = "delete"
    const index = state.data.findIndex((element) =>{
      return element._id === villager._id
    })
    if (index >= 0 ){
      state.data.splice(index, 1)
      state.newDataCount = state.newDataCount -1
    }
    subject.next(state);
  },
  
  initialState

};

export default islandStore;
