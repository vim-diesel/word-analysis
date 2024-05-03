import styled from 'styled-components';

// We use a section tag, because it is a section of the container, combined with
// the text area. So Stats and the Textarea components are a part of the same div, and
// this is a section of the div.
export default function Stats() {
  return <StyledStats>Stats</StyledStats>;
}

const StyledStats = styled.section`
  flex: 1.3;
  background-color: #f1f6f8;
  display: flex;
  flex-wrap: wrap;
`;
