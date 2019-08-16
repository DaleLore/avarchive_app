import React, { Component } from 'react';
import { connect } from 'react-redux'
import { modalToggle } from '../Redux/Actions/modalActions'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


class CollectionModal extends Component {

state = {
    title: "",
    description: ""
}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

closeModal = (e) => {
  // debugger
  e.target.value = !e.target.value
  let toggle = (e.target.value === 'true')
  this.props.modalToggle({[e.target.name]: toggle})
}

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
           <Button name="update" value={false} color='green' type='submit' onClick={this.handleSubmit}>Update</Button>
           <Button name="nevermind" value={false} color='red' onClick={this.props.toggleForm}>Nevermind</Button>
         </Segment>
       </Form>
     </Grid.Column>
    );
  }

}

// const mapStateToProps= state => ({
//   user: state.userInfo,
//   userCollection: state.collectionStore.userCollection
// });

export default connect(null, {modalToggle})(CollectionModal);
