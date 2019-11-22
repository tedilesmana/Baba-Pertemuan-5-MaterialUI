import React from "react";
import FormMessage from './FormMessage'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const Checkout = () => {
  return (
    <MDBContainer>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
          <MDBRow>
           
            <MDBCol className="text-white text-center col-md-6" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
              </MDBCol>
            </MDBCol>

            <MDBCol className="col-md-6">
              <FormMessage />
            </MDBCol>
            
          </MDBRow>
          </MDBJumbotron>
        </MDBCol>
    </MDBContainer>
  )
}

export default Checkout;