import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showModal } from '../Redux/Actions/modalActions'


class UpdateCollection extends Component {

  handleClick = (e) => {
    let toggle = (e.target.value === "true")
    console.log(toggle);
    this.props.showModal({[e.target.name]: toggle})
  }

  render() {
    return (
      <div>
      <form onSubmit={null}>
        <center><h5>Create a new collection</h5></center>
          <input
            type="text"
            name="collection_name"
            placeholder="Collection Name"
            value={null}
            onChange={null}
            required/>

          <textarea
            name="description"
            placeholder="Description"
            value={null}
            onChange={null}/>


          <button type="submit">Update</button>
      </form>
      <button id="nevermind" name="updateCollection" value={false} onClick={this.handleClick}>Nevermind</button>
      </div>
    );
  }

}

const mapStateToProps= state => ({
  collection: state.collectionStore.userCollection
});

const mapDispatchToProps = (dispatch) => ({
  showModal: (collectionObject) => dispatch(showModal(collectionObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCollection);
