import React, { useCallback, useState } from "react";
import styled from "styled-components";
import logo from "../../../assets/Designer.png";
import { AuthButton } from "./AuthButtons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../Redux/hooks";
import { setUserLogged } from "../../../Redux/cartSlice";
const LoginContainer = styled.div`
  background: rgba(255, 255, 255, 0.29);
  box-shadow: 0 15px 10px rgba(66, 66, 66, 0.329);
  -webkit-backdrop-filter: blur(6.3px);
  backdrop-filter: blur(6.3px);
  height: 100vh;

  .logo{
    width: 100px;
    object-fit: contain;
  }

  .auth-btn{
    width: 280px !important;
  }

  .welcome-txt{
    font-size:18px;
    font-weight: 400; 
  }
`;

const InputWrapper = styled.div`
position: relative;
  label {
    margin-right: auto;
    font-weight:700;
    position: absolute;
    top: -7px;
    left:8px;
    background-color: #fff;
    padding: 2px 8px;
    font-size:12px;
  }
`;

const InputContainer = styled.div`
  border-radius: 5px;
  width: 280px; 
  padding: 4px 0.75rem;
  height: 50x;
  color: #ccc;
  margin-top: 0.25rem;
  border:1.5px solid #333;
  

  input {
    background-color: transparent;
    border: 0px;
    font-size:16px;
    color: #151515;
    width: max-content;
    height: 32px;
    width: 100%;

    &:hover,
    &:focus-visible,
    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      color: #585858;
    }
  }
`;


const TestInputContainer = styled.div`
  font-size: 14px;
  background-color: #789a613a;
  border-radius:8px;
  padding:1rem;
  box-shadow: 0 15px 10px rgba(148, 148, 148, .1);
  .pd{
   padding-bottom: 5px;
  }
code{
 font-style :italic ;
}
  .note{
font-weight:600;
  }
  
`
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const emailInputHandler = (e: any) => setEmail(e.target.value);
  const passwodInputHandler = (e: any) => setPassword(e.target.value);


  const checkLogin=(email:string,password:string) =>{
   if(email === 'test@gmail.com' && password === 'Test@123'){
    dispatch(setUserLogged())
    navigate('e-commerce')
   }
  }

const loginHandler = useCallback(() =>{
 email && password && checkLogin(email,password)
},[email,password])
  
  return (
    <LoginContainer className="fl fl-c g1 ac jc h100-m">
      <img className="logo" src={logo} alt="" width={80} />
     <div className="welcome-txt">Welcome to Shop Online...</div>
      <InputWrapper>
        <label>EMAIL</label>
        <InputContainer>
          <input
            placeholder={"enter your email"}
            onChange={emailInputHandler}
          />
        </InputContainer>
      </InputWrapper>
      <InputWrapper>
        <label>PASSWORD</label>
        <InputContainer>
          <input type={"password"}
            placeholder={"enter your password"}
            onChange={passwodInputHandler}
          />
        </InputContainer>
      </InputWrapper>
      <AuthButton className="auth-btn" title="Login" onClick={loginHandler}/>

      <TestInputContainer>
         <div className="note">Please use the test credentials to login... </div>
         <div className="pd"></div>
         Email: <code>test@gmail.com</code> <br/>
         Password : <code>Test@123</code>
      </TestInputContainer>
    </LoginContainer>
  );
};

export default Login;
