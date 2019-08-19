import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateCollection } from '../Redux/Actions/collectionActions'
import { Button, Form, Grid,Segment } from 'semantic-ui-react'


class CollectionModal extends Component {

state = {
    id: this.props.collection.id,
    collection_name: this.props.collection.collection_name,
    description: this.props.collection.description
}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.updateCollection(this.state)
    this.props.toggleForm()
  }

  render() {
    console.log(this.props.collection)
    return (
      <Grid.Column textAlign='center'>
       <Form>
         <Segment>
           <Form.Field>
           <input type="text" name="collection_name" onChange={this.handleChange} placeholder='collection_name' value={this.state.collection_name}/>
           </Form.Field>
           <Form.Field>
             <input type="text" name="description" onChange={this.handleChange} placeholder='Description' value={this.state.description}/>
           </Form.Field>
           <Button name="update" value={false} color='green' type='submit' onClick={this.handleSubmit}>Update</Button>
           <Button name="nevermind" value={false} color='red' onClick={this.props.toggleForm}>Nevermind</Button>
         </Segment>
       </Form>
     </Grid.Column>
    );
  }

}

export default connect(null, {updateCollection})(CollectionModal);
