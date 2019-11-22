import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

class Counter extends Component{

state = {
  order:0
}

HandleCounter = (value) => {
	this.props.onCounterChange(value);
}

Minus = () => {
  if (this.state.order>0) {
    this.setState({
      order: this.state.order - 1
    }, () => {
    	this.HandleCounter(this.state.order);
    })
  }
}

Plus = () =>{
    this.setState({
      order: this.state.order + 1
    }, () => {
    	this.HandleCounter(this.state.order);
    })
  }

	render(){
		return(
			<div className="text-center mt-4">
              <MDBBtn color="success" outline type="submit" onClick={this.Plus}>
                Plus
                <MDBIcon icon="plus" className="ml-2" />
              </MDBBtn>
              <MDBBtn color="danger" outline type="submit" onClick={this.Minus}>
                Minus
                <MDBIcon icon="minus" className="ml-2" />
              </MDBBtn>
            </div>
		)
	}
}

export default Counter;