import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTerm } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term:''};

    this.onInputChange = this.onInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){

    event.preventDefault();

    this.props.fetchTerm(this.state.term);

    this.setState({term:''});

  }



  render(){
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchTerm}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
