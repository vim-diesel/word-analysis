import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      <small>&copy; GreenByte Devlopment 2024</small>
      <small>Updated: 14 days ago</small>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 1050px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  opacity: 0.4;
`;
