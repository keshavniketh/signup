import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import  { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";



class Login extends Component {
    state = { id: "", password: "", usertype: 0};
  idChange = event => {
    this.setState({ name: event.target.value });
  };
  passwordChange = event => {
    this.setState({ password: event.target.value });
  };
  submit = event => {
    var value=this;
    var formdata= new FormData(document.getElementById("custrm"));
    var data= new URLSearchParams();
    for (var pair of formdata) {
      data.append(pair[0], pair[1])
    }
    console.log(data)

    fetch('http://localhost:8001/login', {
      method: 'post',
      body: data
    }).then(function (response) {
      return response.json();

    
    }).then(function (json) {
      console.log(json[0].usertype)
      value.setState({ usertype: json[0].usertype })
      value.setState({ password: json[0].password })
      value.setState({ id: json[0].id })
    
      if (value.state.usertype == 1) {
        sessionStorage.setItem('aid', value.state.id);
    sessionStorage.setItem('aname', value.state.password);
    alert(sessionStorage.getItem('aid'));
        window.history.pushState(null, "admin", "/adminlogin");
         window.location.reload();
        
      }
      if (value.state.usertype == 2) {
        sessionStorage.setItem('fid', value.state.id);
    sessionStorage.setItem('fname', value.state.password);
        window.history.pushState(null, "staff", "/faculty");
        window.location.reload();
      }
      if (value.state.usertype == 3) {
        sessionStorage.setItem('sid', value.state.id);
    sessionStorage.setItem('sname', value.state.password);
        window.history.pushState(null, "student", "/studentlogin");
        window.location.reload();
      }
    })
  };
  userTypeChanged = event => {
    if (event.target.value === "Admin") {
      this.setState({ usertype: "admin" });
    }
    if (event.target.value === "Staff") {
      this.setState({ usertype: "staff" });
    }
    if (event.target.value === "Student") {
      this.setState({ usertype: "student" });
    }
  };
  signup = () => {
    window.history.pushState(null,"str","/");
    window.location.reload();
  };
  display = () => {
    window.history.pushState(null,"str","/display");
    window.location.reload();
  };
 render(){
  return (
    <html style={{
     }}>
    <body>
      <Form id='custrm'>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your ID" group type="text" validate name='id'onChange={this.idChange} />
              <MDBInput
                label="Your password"
                group
                type="password"
                name="password"
                validate
                containerClass="mb-0"
              />
              <Col>
              <div className='dropdown'>
      
                <select style={{
                  marginLeft: "0%",
                  width: "180px",
                  backgroundColor: "#e6e6e0"
                }} name="usertype">
                  <option value="1">Admin</option>
                  <option value="2">Staff</option>
                  <option value="3">Student</option>
                </select>
              </div>
              </Col>
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                  onClick={this.submit}
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                  <Router>
            <ul class="breadcrumb navbar navbar-inverse" style={{color:"black",marginLeft:"10%"}}>
              <li>
                <NavLink
                  to="/"
                  exact
                  onClick={this.signup}
                >                
                  Sign up
                </NavLink>
              </li>
            </ul>
          </Router>
                
              </p>
              <Router>
            <ul class="breadcrumb navbar navbar-inverse" style={{color:"black",marginLeft:"10%"}}>
              <li>
                <NavLink
                  to="/"
                  exact
                  onClick={this.display}
                >                
                  <MDBBtn
                  color="purple"
                  type="button"
                  className="btn-block"
                >
                Display free classes
                </MDBBtn>
                </NavLink>
              </li>
            </ul>
          </Router>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Form>
    </body>
    </html>
  );
}
};
export default Login;