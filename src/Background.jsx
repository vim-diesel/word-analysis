import styled from 'styled-components';

export default function Background() {
  return <Bg />;
}

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 254px;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(101, 0, 163, 0.9),
      rgba(24, 120, 175, 0.9)
    ),
    url('https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=100');
`;
