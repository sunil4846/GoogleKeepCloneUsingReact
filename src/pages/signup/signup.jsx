import React from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import img1 from './images/account.svg'
import './signup.css';
import { signUp } from '../../services/UserService';

const regexPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexFirstName = /^[A-Z]{1}[a-z]{2,}$/;
const regexLastName = /^[A-Z]{1}[a-z]{2,}$/;
// const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
// const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;

function Signup() {

  const [signupObj, setSignupObj] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    service : "advance",
  });
  const [regexObj, setRegexObj] = React.useState({
    firstNameBorder: false,
    lastNameBorder: false,
    emailBorder: false,
    passwordBorder: false,
    firstNameHelper: "",
    lastNameHelper: "",
    emailHelper: "",
    passwordHelper: "",
  });

  // first name
  const takeFirstName = (event) => {
    // creating a new object combining the old version of object
    setSignupObj((prevState) => ({
      ...prevState,
      firstName: event.target.value,
    }));
  };

  // last name
  const takeLastName = (event) => {
    // creating a new object combining the old version of object
    setSignupObj((prevState) => ({
      ...prevState,
      lastName: event.target.value,
    }));
  };

  const takeEmail = (event) => {
    // creating a new object combining the old version of object
    setSignupObj((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  const takePassword = (event) => {
    setSignupObj((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const submit = () => {
    let firstNameTest = regexFirstName.test(signupObj.firstName);
    let lastNameTest = regexLastName.test(signupObj.lastName);
    let emailTest = regexEmail.test(signupObj.email);
    let passwordTest = regexPassword.test(signupObj.password);
    console.log(firstNameTest,lastNameTest,emailTest,passwordTest);
    if (firstNameTest === false) {
      console.log('something');
      setRegexObj((prevState) => ({
        ...prevState,
        firstNameBorder: true,
        firstNameHelper: "enter correct first name",
      }));
    } else {
      setRegexObj((prevState) => ({ ...prevState, firstNameBorder: false, firstNameHelper: "" }));
    }

    if (lastNameTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        lastNameBorder: true,
        lastNameHelper: "enter correct last name",
      }));
    } else {
      setRegexObj((prevState) => ({ ...prevState, lastNameBorder: false, lastNameHelper: "" }));
    }

    if (emailTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct email",
      }));
    } else {
      setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }));
    }
    if (passwordTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct password",
      }));
    } else {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }

    if(firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true){
      signUp(signupObj).then((response)=>{console.log(response); localStorage.setItem('token',response.data.id)})
      .catch((error)=>{console.log(error)})
      console.log("signup succeccful");
    }
  };

  return (
    <section className="mainSection">
      <div className="mainDiv">
        <div className="inputDiv">
          <div className='fundooName'>
            <div>
              <span style={{ color: "#4285f4", fontsize: "20px" }}>F</span>
              <span style={{ color: "red", fontsize: "20px" }}>u</span>
              <span style={{ color: "#f4b400", fontsize: "20px" }}>n</span>
              <span style={{ color: "#4285f4", fontsize: "20px" }}>d</span>
              <span style={{ color: "#0f9d58", fontsize: "20px" }}>o</span>
              <span style={{ color: "red", fontsize: "20px" }}>o</span>
            </div>
          </div>

          <div className='pTagText'>
            <p>Create Your Fundoo Account</p>
          </div>
          <div className="inputBoxDiv">
            <TextField id="outlined-basic" error={regexObj.firstNameBorder}  helperText={regexObj.firstNameHelper} onChange={takeFirstName} label="First Name" variant="outlined" size='small' className="inputText" />
            <TextField id="outlined-basic" error={regexObj.lastNameBorder}  helperText={regexObj.lastNameHelper} onChange={takeLastName} label="Last Name" variant="outlined" size='small' className="inputText" />
          </div>
          <div id="inputDivUsername">
            <TextField id="outlined-basic" error={regexObj.emailBorder} helperText={regexObj.emailHelper} onChange={takeEmail} label="Username" variant="outlined" size='small' className="inputUsername" />
          </div>
          <div className='spanText'>
            <span style={{ fontsize: "14px", color: "grey" }}>You can use numbers,letters & periods.</span>
          </div>
          <div className='pTagText'>
            <p style={{ fontsize: "16px", color: "#1a73e8" }}>Use my current email address instead</p>
          </div>

          <div className="inputBoxDiv">
            <TextField id="outlined-basic" error={regexObj.passwordBorder} onChange={takePassword} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size='small' className="inputText" />
            <TextField id="outlined-basic"  error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="ConfirmPassword" variant="outlined" size='small' className="inputText" />
          </div>
          <div className='spanText'>
            <span style={{ fontsize: "14px", color: "grey" }}>Use 8 or more characters with a mix of letters, numbers & symbols</span>
          </div>
          <div className='checkboxClass'>
            <FormControlLabel control={<Checkbox />} label="ShowPassword" />
          </div>
          <div className="buttonDiv">
            <Link href="#" underline="none">
              {'Signin Instead'}
            </Link>
            <Button variant="contained" onClick={submit}>Next</Button>
          </div>
        </div>
        <div className="imgMain">
          <img src="./images/account.svg" alt="" style={{ width:'75%' }} />
          <p>One Account. All of GGoogle <br />working for you</p>
        </div>
      </div>
    </section>
  )
}

export default Signup