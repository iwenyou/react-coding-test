import { FETCHED_TERM } from '../actions/index';

export default function( state = [], action){
  console.log("action: ", action);

  switch(action.type){
    case FETCHED_TERM:
     console.log("items",action.payload.items);

     return state.concat([action.payload.items]);
  }
  console.log("state:",state);
  return state;
}
