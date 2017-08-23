import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class PhotoList extends Component {

  renderPhoto(links){
    console.log('links:',links);

    var photoList = links.map(function(link){
      return <div className="col-md-3 thumbnail">
        <img src={link} />
      </div>;
    })

    return(
      <div className="row" >
        { photoList }
      </div>
    );
  }

  render(){
    return(
      <div>
        {this.props.result.map(this.renderPhoto)}
      </div>
    )
  }
}

function mapStateToprops({ result }){
  return { result };
}

export default connect(mapStateToprops)(PhotoList);
