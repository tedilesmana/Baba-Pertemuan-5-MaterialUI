import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Counter from './Counter'

class FormMessage extends Component {

state = {
  order:0
}

Counter = (newValue) => {
  this.setState({
    order : newValue
  })
}

render(){
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12" className="p-5">
            <p className="h4 text-center mb-4">Write to us</p>
            <div className="">
              <div className="count btn-outline-success col-1 float-right">{this.state.order}</div>
            </div>
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
             <Counter onCounterChange={(value) => this.Counter(value)} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
};

export default FormMessage;