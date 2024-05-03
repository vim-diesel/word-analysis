import Stats from './Stats';
import TextArea from './TextArea';
import styled from 'styled-components';

export default function Container() {
  return (
    <StyledMain>
      <TextArea />
      <Stats />
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
`;
