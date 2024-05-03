import styled from 'styled-components';

export default function TextArea() {
  return (
    <StyledTextArea
      onChange={(e) => console.log(e.target)}
      placeholder='Enter your text'
      spellCheck='false'
    />
  );
}

const StyledTextArea = styled.textarea`
  all: unset;
  resize: none;
  flex: 2;
  font: inherit;
  padding: 30px 40px;
  font-size: 1.375rem;

  &::placeholder {
    font-weight: 500;
    color: #959c9f;
  }

  & > textarea {
    height: 100%;
    width: 100%;
  }
`;
