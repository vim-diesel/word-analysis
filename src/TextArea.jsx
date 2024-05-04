import styled from 'styled-components';
import toast from 'react-hot-toast';

export default function TextArea({ text, setText }) {
  const handleTextChange = (e) => {
    let newText = e.target.value;

    if (newText.includes('<script>')) {
      newText = newText.replace('<script>', '');
      toast.error("Nice try! 🤣 Don't hack me please!");
    }

    setText(newText);
  };

  return (
    <StyledTextArea
      value={text}
      onChange={handleTextChange}
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
