import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import "./signin.css";
import { login } from '../../services/UserService';
import { useHistory } from 'react-router-dom';

const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Signin() {
    const history = useHistory()
    const [signinObj, setSigninObj] = React.useState({
        email: "",
        password: "",
    });
    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false,
        passwordBorder: false,
        emailHelper: "",
        passwordHelper: "",
    });

    const takeEmail = (event) => {
        // creating a new object combining the old version of object
        setSigninObj((prevState) => ({
            ...prevState,
            email: event.target.value,
        }));
    };

    const takePassword = (event) => {
        setSigninObj((abc) => ({ ...abc, password: event.target.value }));
    };

    const submit = () => {
        let emailTest = regexEmail.test(signinObj.email);
        let passwordTest = regexPassword.test(signinObj.password);

        if (emailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct email",
            }));
        } else {
            setRegexObj((abc) => ({ ...abc, emailBorder: false, emailHelper: "" }));
        }
        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter correct password",
            }));
        } else {
            setRegexObj((abc) => ({
                ...abc,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }
        // check entered input with backend api
        if(emailTest === true && passwordTest === true){
            login(signinObj).then((response)=>{console.log(response);history.push('/Dashboard'); localStorage.setItem('token',response.data.id)})
            .catch((error)=>{console.log(error)})
            console.log("successfull login");
          }
    };
    return (
        <section className="section1">
            <div className="outerDiv">
                {/* <div className="fundooName"> */}
                <div>
                    <span style={{ color: "#4285f4", fontsize: "20px" }}>F</span>
                    <span style={{ color: "red", fontsize: "20px" }}>u</span>
                    <span style={{ color: "#f4b400", fontsize: "20px" }}>n</span>
                    <span style={{ color: "#4285f4", fontsize: "20px" }}>d</span>
                    <span style={{ color: "#0f9d58", fontsize: "20px" }}>o</span>
                    <span style={{ color: "red", fontsize: "20px" }}>o</span>
                </div>
                {/* </div> */}
                <p>Signin</p>
                <p>Use Your Google Account</p>
                <div className="inputBoxDiv">
                    <TextField id="outlined-basic" error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Email" variant="outlined" size='small' className="inputBox" onChange={takeEmail} />
                </div>
                <div className="inputBoxDiv">
                    <TextField id="outlined-basic" error={regexObj.passwordBorder} onChange={takePassword} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size='small' className="inputBox" /><br />
                </div>
                <div className='spanText'>
                    <span style={{ color: "#1a73e8", fontsize: "20px", float: 'right' }}>Forget Email?</span>
                </div>

                <div className='spanText'>
                    <span style={{ fontsize: "15px",textAlign:"left" }}>Not your computer? Use Guest mode to sign in privately. <span style={{ color: "#1a73e8", fontsize: "18px" }}>Learn More</span> </span>
                    
                </div>
                {/* <div className='spanText'>
                    
                </div> */}
                <div className="buttonDiv">
                    <Link href="#" underline="none">
                        {'Create Account'}
                    </Link>
                    {/* <input type="button" value="Next" id="nextBtn"> */}
                    <Button variant="contained" onClick={submit}>Next</Button>
                </div>
            </div>
        </section>
    )
}

export default Signin