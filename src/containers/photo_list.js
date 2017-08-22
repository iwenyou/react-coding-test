import React, { Component } from 'react';

export default class PhotoList extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-3 thumbnail">
          <img src="http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/shiba-inu_04_lg.jpg"/>
        </div>
        <div className="col-md-3 thumbnail">
          <img src="http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/shiba-inu_04_lg.jpg"/>
        </div>
        <div className="col-md-3 thumbnail">
          <img src="http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/shiba-inu_04_lg.jpg"/>
        </div>
        <div className="col-md-3 thumbnail">
          <img src="http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/shiba-inu_04_lg.jpg"/>
        </div>
      </div>
    )
  }
}
