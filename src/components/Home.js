import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSummary } from '../libs/Summary';
import { Rings } from 'react-loader-spinner'


const Main = styled.div`
  height: 100vh;
`;

const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  padding-left: 50px;
  border-bottom: 1px solid #ddd;
`;

const Body = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  height: 100%;
  width: 100%;
  flex: 3;
  padding: 50px;

  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  height: 100vh;
  width: 100%;
  flex: 2;
  padding: 0 20px;
  border-left: 1px solid #ddd;

  display: flex;
  justify-content: center;s
`;

const FormSection = styled.div`
  margin-top: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TextArea = styled.textarea`
  height: 200px;
  border: 1px solid #ddd;
  padding: 20px;
`;

const URLBox = styled.input`
  border: 1px solid #ddd;
  padding: 20px;
`;

const FileButton = styled.input``;

const SummarizeBtn = styled.button`
  margin-top: 30px;
  width: 200px;
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
`;

function Home() {
  
  const [textValue, setTextValue] = useState();
  const [output, setOutput] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSummary = async e => {
    e.preventDefault();
    setOutput('');
    setIsLoading(true)
    let summary = await getSummary({text: textValue});
    setIsLoading(false);
    setOutput(summary);
  }

  return (
    <Main>
      <Header>MCQ Generator</Header>
      <Body>
        <LeftSection>
          {
          isLoading ? <Rings
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
            /> :
            output  
          }
        </LeftSection>
        <RightSection>
          <FormSection>
            <TextArea onChange={(event) => {setTextValue(event.target.value) }} placeholder='Enter text here'/>
            <URLBox placeholder='URL'/>
            <FileButton type='file' />
            <SummarizeBtn onClick={handleSummary}>Summarize</SummarizeBtn>
          </FormSection>
        </RightSection>
      </Body>
    </Main>
  );
}

export default Home;