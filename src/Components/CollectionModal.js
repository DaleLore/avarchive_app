import React, { Component } from 'react';
import { connect } from 'react-redux'

class CollectionModal extends Component {

  render() {
    return (
      <div>
        
      </div>
    );
  }

}

const mapStateToProps= state => ({
  user: state.userInfo
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionModal);
