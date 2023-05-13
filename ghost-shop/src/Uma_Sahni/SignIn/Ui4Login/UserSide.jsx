import { Box, Button, Image, Input, Text,FormLabel, Center, Alert, AlertTitle, AlertDescription } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReqresLogin, gitHubLogin, login } from "../../../Redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const UserSide = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(location.state);
  // const store = useSelector((store) => console.log(store.authReducer));
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(login()).then(() => navigate(location.state));
  };
  const handleLoginGit = () => {
    dispatch(gitHubLogin()).then((res) => navigate(location.state));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [myAlert, setAlert] = useState(false)
 
  // const handleClick = () => {
  //   dispatch(login()).then(() => navigate(location.state.pathname));
  // };
  // const handleLoginGit = () => {
  //   dispatch(gitHubLogin()).then((res) => navigate(location.state.pathname));
  // };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const Initial = {
    name:"",
    email:"",
    password:"",
    gender:""
  }
  const [state, setState] = useState(Initial)

  const handleChange = (e) =>{
const {name, value} = e.target
setState((pre)=>({...pre, [name]:value}))


  }
  
  const handleReqLogin = () => {
    // console.log(email, password);
    // const obj = {
    //   email,
    //   password,
    // };
    // dispatch(ReqresLogin(obj)).then((res)=>navigate(location.state))
  };

const handleFormSubmit = (e) =>{
  e.preventDefault()
  console.log(state)
  dispatch(ReqresLogin(state)).then((res) => {
    const successAlert = document.createElement('div')
    successAlert.classList.add('alert')
    successAlert.innerHTML = 'Congratulations your account is created <button class="btn btn-success">OK</button>'
    document.body.appendChild(successAlert)
    const okButton = successAlert.querySelector('button')
  okButton.style.backgroundColor = 'green'
  okButton.style.color = 'white'
  okButton.style.border = '1px solid black'
  okButton.style.padding = '8px 16px'
  okButton.style.fontSize = '14px'
  okButton.style.borderRadius = '4px'
  okButton.style.background = "red"
  okButton.style.cursor = 'pointer'
    okButton.addEventListener('click', () => {
      successAlert.remove()
      okButton.disabled = true
    })
    navigate(location.state)
  })
}



  return (
    <div>
   
       
       
     <form onSubmit={handleFormSubmit} >
        <FormLabel>Name </FormLabel>
      <Input
       name="name"
        type="text"
        value={state.name}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Name"
        
      />
     
      <FormLabel>Email address</FormLabel>
      <Input
      name="email"
        type="email"
        value={state.email}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Email Address"
       
      />
      <FormLabel>Password</FormLabel>
      <Input
      name="password"
        type="text"
        value={state.password}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Password"
       
      />
     
      <FormLabel>Gender</FormLabel>
      <Input
      name="gender"
        type="text"
        value={state.gender}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Gender"
        
      />
      <Input type="submit"
        
        margin={"4"}
        width={"80%"}
      bg="#e53e3e"
      color="white"
      >
       
      </Input>
     </form>
    </div>
  );
};

export default UserSide;
