import React, {Component,Fragment} from 'react';
import Thumbnail from './Thumbnail';import {MDBRow} from 'mdbreact';
import Checkout from './Checkout';

class Home extends Component{
    render(){
        return(
            <Fragment className="">
                <Checkout />

               {/* <MDBRow className="no-gutters">
                    <Thumbnail title="Tokyo Ghoul" desc="transformasi kaneki menjadi ghoul" btn="Submit"/>
                    <Thumbnail title="Tokyo Ghoul" desc="transformasi kaneki menjadi ghoul" btn="Submit"/>
                    <Thumbnail title="Tokyo Ghoul" desc="transformasi kaneki menjadi ghoul" btn="Submit"/>
                    <Thumbnail />
                </MDBRow>*/}

            </Fragment>
        )
    }
}


export default Home;