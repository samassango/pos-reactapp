import React, { Component } from 'react';
import './style.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

class Login extends Component{
  constructor(props){
    super(props);
    this.state ={
      username:'',
      password:'',
      open:false,
    }
  }
  handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
  this.handleRegister();
};

  handlePassword = (event)=>{
    event.preventDefault();
    this.setState({password:event.target.value,})
  }
  handleUsername =(event) => {
    event.preventDefault();
    this.setState({username:event.target.value});
  }
  handleLogin = ()=>{

  }
  handleRegister =()=>{

  }
  render(){

    const actions = [
     <FlatButton
       label="Cancel"
       primary={true}
       onClick={this.handleClose}
     />,
     <FlatButton
       label="Submit"
       primary={true}
       onClick={this.handleRegister}
     />,
   ];

    return(
      <Card>
       <CardHeader
         title="Login"
       />
       <div>
       <TextField
            hintText="Enter username or email address"
            value={this.state.username}
             floatingLabelText="Username"
            onChange ={this.handleUsername.bind(this)}
          /><br />
          <TextField
             type="password"
            hintText="Enter password"
             floatingLabelText="Password"
              value={this.state.password}
              onChange ={this.handlePassword.bind(this)}
          /><br />
       </div>
       <CardActions>
         <FlatButton label="Login" onClick={this.handleLogin.bind(this)} />
         <FlatButton label="Sign Up?"  onClick={this.handleOpen} />
       </CardActions>
       <div>
       <Dialog
              title="Create Account?"
              actions={actions}
              modal={true}
              open={this.state.open}
            >
            <TextField
                 hintText="Fullnames"
                   fullWidth={true}
                 value={this.state.username}
                  floatingLabelText="Fullnames"
                 onChange ={(e)=>{e.preventDefault();
                    this.setState({fullnames:e.target.value});}}
               /><br />
               <TextField
                    hintText="Enter emil address"
                    type="email"
                    fullWidth={true}
                    value={this.state.username}
                     floatingLabelText="Email address"
                    onChange ={(e)=>{e.preventDefault();
                       this.setState({username:e.target.value});}}
                  /><br />
                  <TextField
                       hintText="Enter contact no."
                       type="text"
                       fullWidth={true}
                       value={this.state.contactNo}
                        floatingLabelText="Contact number"
                       onChange ={(e)=>{e.preventDefault();
                          this.setState({contactNo:e.target.value});}}
                     /><br />
                  <TextField
                          hintText="Enter physical address."
                          type="text"
                          fullWidth={true}
                          value={this.state.physicalAddress}
                           floatingLabelText="Physical address"
                          onChange ={(e)=>{e.preventDefault();
                             this.setState({physicalAddress:e.target.value});}}
                        /><br />
               <TextField
                  type="password"
                    fullWidth={true}
                 hintText="Enter password"
                  floatingLabelText="Password"
                   value={this.state.password}
                   onChange ={(e)=>{e.preventDefault();
                      this.setState({password:e.target.value});}}
               /><br />
               <TextField
                  type="password"
                    fullWidth={true}
                 hintText="Confirm password"
                  floatingLabelText="Confirm Password"
                   value={this.state.confirmPassword}
                   onChange ={(e)=>{e.preventDefault();
                      this.setState({confirmPassword:e.target.value});}}
               /><br />
            </Dialog>
       </div>
     </Card>
    )
  }
}

export default Login;
