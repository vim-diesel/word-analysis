import Stats from './Stats';
import TextArea from './TextArea';
import styled from 'styled-components';
import React from 'react';

export default function Container() {
  const [text, setText] = React.useState('');
  const numWords = text.split(' ').filter((word) => word !== '').length;
  const numChars = text.length;

  return (
    <StyledMain>
      <TextArea text={text} setText={setText} />
      <Stats numWords={numWords} numChars={numChars}/>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 1050px;
  height: 520px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  margin-top: 55px;
  display: flex;
  overflow: hidden;
  position: relative;

  @media (max-width: 1150px) {
    width: 85vw;
    flex-direction: column;
  }
`;
