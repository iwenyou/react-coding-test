import { FETCHED_TERM } from '../actions/index';
import _ from 'lodash';

export default function( state = [], action){
  console.log("action: ", action);

  switch(action.type){
    case FETCHED_TERM:
     console.log("items",action.payload.items);

     const items = action.payload.items;

     const allLinks = state.concat(items.map(function(item){
       return item.media.m;
     }));

     return _.chunk(allLinks,4);
  }
  console.log("state:",state);
  return state;
}
