import React, { Component } from 'react';
import { connect } from 'react-redux'

class Csv extends Component {

  render() {

    console.log(this.props.collection);
    return (

      <div className="home">
        <h5>CSV Page</h5>
          <table id="table">
            <thead>
            <tr>
                <th id="collection-id">Collection Id</th>
                <th>Collection Name</th>
                <th>Description</th>
                <th>Item Id</th>
                <th>Item Title</th>
                <th>Item Media Type</th>
            </tr>
            </thead>

            <tbody id="table-data">

            </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps= state => ({
  collection: state.collectionStore.userCollection
});

export default connect(mapStateToProps, null)(Csv);
