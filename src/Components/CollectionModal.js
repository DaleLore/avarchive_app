import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class CollectionModal extends Component {

  render() {
    console.log(this.props.userCollection)
    return (
      <Grid.Column textAlign='center'>
       <Form>
         <Segment>
           <Form.Field>
           <input type="text" name="collection_name" onChange={this.handleChange} placeholder='collection_name' value={this.props.userCollection.collection_name}/>
           </Form.Field>
           <Form.Field>
             <input type="text" name="description" onChange={this.handleChange} placeholder='Description' value={this.props.userCollection.description}/>
           </Form.Field>
           <Button name="edit_account" value={false} color='green' type='submit' onClick={this.handleSubmit}>Update</Button>
           <Button name="edit_account_modal" value={false} color='red' onClick={this.props.handleModalToogle}>Nevermind</Button>
         </Segment>
       </Form>
     </Grid.Column>
    );
  }

}

const mapStateToProps= state => ({
  user: state.userInfo,
  userCollection: state.collectionStore.userCollection
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionModal);
