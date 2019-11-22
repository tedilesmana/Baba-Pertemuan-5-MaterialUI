import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow,MDBContainer } from 'mdbreact';

const Thumbnail = (props) => {
  return (
		    <MDBCol md="3" className="p-3">
		      <MDBCard>
		        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
		        <MDBCardBody>
		          <MDBCardTitle>{props.title}</MDBCardTitle>
		          <MDBCardText>
		            {props.desc}
		          </MDBCardText>
		          <MDBBtn href="#">{props.btn}</MDBBtn>
		        </MDBCardBody>
		      </MDBCard>
		    </MDBCol>
  )
}

Thumbnail.defaultProps = {
	title:'No Judul',
	desc:'Silahkan di isi deskripsi',
	btn:'No Action'
}

export default Thumbnail;