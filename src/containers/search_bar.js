import React, { Component } from 'react';

export default class SearchBar extends Component {

  render(){
    return (
      <form className="input-group">
        <input className="form-control"/>
        <span className="input-group-btn">
          <button className="btn btn-submit">
            submit
          </button>
        </span>
      </form>
    )
  }
}
