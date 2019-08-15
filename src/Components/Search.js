import React, { Component } from 'react';
import { connect } from 'react-redux'

class Search extends Component {

state = {
  searchTerm: ""
}
  render() {
    return (
      <div>
        <input type="search"/>
      </div>
    );
  }

}

export default connect()(Search);
