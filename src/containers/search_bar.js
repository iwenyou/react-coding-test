import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term:''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }



  render(){
    return (
      <form className="input-group">
        <input
          className="form-control"
          placeholder="Enter search term"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button className="btn btn-submit">
            submit
          </button>
        </span>
      </form>
    )
  }
}
