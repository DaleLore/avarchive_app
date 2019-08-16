import React, { Component } from 'react';

export default class Modal extends Component {

  onClose = (e) => {
    this.props.onClose && this.props.Close(e)
  }
  render(){
    if(!this.props.show){
      return null
    }

    return(
      <form>
        <input
          type="text"
          name="collection_name"/>

        <textarea
          type="text"
          name="description"/>

        <div>
          <button > Fix </button>
          <button onClick={(e) => {this.onClose(e)}}> Nevermind </button>
        </div>
      </form>
    )
  }
}
