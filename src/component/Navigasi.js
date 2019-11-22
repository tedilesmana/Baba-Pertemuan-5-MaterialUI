import React, { Component } from "react";
import Home from './Home';
import Event from './Event'; 
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md" className="mb-5">
        <MDBNavbarBrand>
          <strong className="white-text">BABASTUDIO</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav right>

              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <Link to= "/"className="li text-white">Home</Link>
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <Link to= "/event"className="li text-white">Simple Event</Link>
                </MDBNavLink>
              </MDBNavItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBNavbar>

            <Switch>
              <Route path="/" exact>
                <Event />
              </Route>
              <Route Path="/event">
                <Home />
              </Route>
            </Switch>

    </Router>
    );
  }
}

export default NavbarPage;