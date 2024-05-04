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
      rgba(16, 0, 163, 0.557),
      rgba(115, 166, 255, 0.456)
    ),
    url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&auto=format&fit=crop&crop=center&w=1600&h=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
`;


