import styled from 'styled-components';
import Background from './Background';

// Note the keyword as="span" in the ThinHeader styled component. This is a prop that
// is passed to the styled component. Our styled component is styled as a header,
// but renders as a <span>. This is a way to style a component as one thing, but render
// it as another. This is a common pattern in styled components.
export default function Header() {
  return (
    <header>
      <Background />
      <StyledHeader>
        Word<ThinHeader as='span'>Analysis</ThinHeader>
      </StyledHeader>
    </header>
  );
}

const StyledHeader = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
  margin-top: 75px;
  text-align: center;

  @media (max-width: 1150px) {
    font-size: 7vw;
  }
`;

const ThinHeader = styled(StyledHeader)`
  font-weight: 300;
`;
