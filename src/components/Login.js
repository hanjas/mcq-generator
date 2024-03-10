import React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Main = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 3;
  padding-left: 50px;
`;

const RightSection = styled.div`
  height: 100vh;
  flex: 2; 
  position: relative;
  background: linear-gradient(42deg, rgba(56,184,142,1) 20%, rgba(58,168,173,1) 100%);
  padding-right: 50px;
`;

const LeftHeader = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

const LeftBody = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const Form = styled.form`
  margin-top: 100px;
  height: 500px;
  width: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 50px;
    padding: 0;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 400px;
  }

  button {
    margin-top: 30px;
    border-radius: 20px;
    border: 0px solid green;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    background: linear-gradient(42deg, rgba(56,184,142,1) 20%, rgba(58,168,173,1) 100%);
  }
`;


function Login() {
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    navigate(`/home`);
  }

  return (
    <Main>
      <LeftSection>
        <LeftHeader>MCQ Generator</LeftHeader>
        <LeftBody>
          <Form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <input type='text' placeholder='username'></input>
            <input type='password' placeholder='password'></input>
            <button type='submit'>Sign In</button>
          </Form>
        </LeftBody>
      </LeftSection>
      <RightSection />
    </Main>
  );
}

export default Login;