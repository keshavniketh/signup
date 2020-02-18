import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
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
class Signup extends Component{
  state = { id: "", password: "", usertype: 0 ,name: "",errors: {
    id: " ",
    password: " "
  }};
  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "id":
        errors.id = value.length > 3 ? "id is not valid!" : "";
        break;

      case "password":
        errors.password = value.length < 5 ? "Password too short" : "";
        break;

      
      default:
        break;
    }

    this.setState({ errors, [name]: value });
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
  submit = event => {
    alert("submit");
    var value=this;
    var formdata= new FormData(document.getElementById("custrm"));
    var data= new URLSearchParams();
    for (var pair of formdata) {
      data.append(pair[0], pair[1])
    }
    console.log(data)

    fetch('http://localhost:8001/signup', {
      method: 'post',
      body: data
    }).then(function (response) {
      console.log(response)
      return response.json();
    }).then(function (json) {
      if(json.message.length>1){
      console.log(json)
      alert(json.message)
      window.history.pushState(null, "str", "/login");
      window.location.reload();}
      else{
      console.log(json[0].usertype)
      value.setState({ usertype: json[0].usertype })
      value.setState({ password: json[0].password })
      value.setState({ id: json[0].id })
      console.log(value.state.usertype)
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
    alert(sessionStorage.getItem('fid'));
        window.history.pushState(null, "staff", "/faculty");
        window.location.reload();
      }
      if (value.state.usertype == 3) {
        sessionStorage.setItem('sid', value.state.id);
    sessionStorage.setItem('sname', value.state.password);
    alert(sessionStorage.getItem('sid'));
        window.history.pushState(null, "student", "/studentlogin");
        window.location.reload();
      }
    }
    })
  
  };
 
  login = () => {
    window.history.pushState(null,"str","/login");
    window.location.reload();
  };
  render(){
  return (
      <html style={{}}>    
      <body>
      <div className='keshav'> 
      <MDBContainer>
        <Form id="custrm">
      <MDBRow md='6'>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
              width: '26rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong>SIGN UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your ID'
                name='id'
                onChange={this.handleChange}
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <div className="errors">
                        {this.state.errors.id}{" "}
                      </div>
              <MDBInput
                label='New password'
                group
                type='password'
                name='password'
                
                onChange={this.handleChange}
                validate
                labelClass='white-text'
              />
              <div className="errors">
                        {this.state.errors.password}{" "}
              </div>
              <Col>
              <div className='dropdown'>
      
                <select style={{
                  marginLeft: "0%",
                  width: "200px",
                  backgroundColor: "#e6e6e0"
                }} name="usertype" onChange={this.usertypeChanged} >
                  <option value="1">Admin</option>
                  <option value="2">Staff</option>
                  <option value="3">Student</option>
                </select>
              </div>
              </Col>
              <br/>
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                <span style={{ color: "red" }}>{this.state.userMessage}</span>
                  <MDBBtn
                    color='success'
                    rounded
                    type='submit'
                    className='btn-block z-depth-1'
                    onClick={e => {
                      if (!this.validateForm(this.state.errors)) {
                        e.preventDefault();
                        this.setState(() => {
                          return { userMessage: "Please check the fields" };
                        });
                      } else {
                        e.preventDefault();
                        alert("submit");
                      var value=this;
                      var formdata= new FormData(document.getElementById("custrm"));
                      var data= new URLSearchParams();
                      for (var pair of formdata) {
                        data.append(pair[0], pair[1])
                      }
                      console.log(data)
                  
                      fetch('http://localhost:8001/signup', {
                        method: 'post',
                        body: data
                      }).then(function (response) {
                        return response.json();
                  
                      
                      }).then(function (json) {
                        alert(json.message)
                        if(json.message.length>1){
                        console.log(json)
                        alert(json.message)
                        window.history.pushState(null, "str", "/login");
                        window.location.reload();}
                        else{
                        console.log(json[0].usertype)
                        value.setState({ usertype: json[0].usertype })
                        value.setState({ password: json[0].password })
                        value.setState({ id: json[0].id })
                        console.log(value.state.usertype)
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
                      alert(sessionStorage.getItem('fid'));
                          window.history.pushState(null, "staff", "/faculty");
                          window.location.reload();
                        }
                        if (value.state.usertype == 3) {
                          sessionStorage.setItem('sid', value.state.id);
                      sessionStorage.setItem('sname', value.state.password);
                      alert(sessionStorage.getItem('sid'));
                          window.history.pushState(null, "student", "/studentlogin");
                          window.location.reload();
                        }
                      }
                      })}}}
                  >
                    Sign Up
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='9'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?     
            <Router>
            <ul class="breadcrumb navbar navbar-inverse" style={{color:"black",marginLeft:"10%"}}>
              <li>
                <NavLink
                  to="/login"
                  exact
                  onClick={this.login}
                >                
                  Login
                </NavLink>
              </li>
            </ul>
          </Router>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </Form>
    </MDBContainer>
    
    </div>
    
    </body>
    </html>
     );
   }
  };
export default Signup;