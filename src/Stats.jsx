import styled from 'styled-components';
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

const facebookSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    width='25'
    height='25'
    viewBox='0 0 50 50'
  >
    <path d='M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z'></path>
  </svg>
);

// We use a section tag, because it is a section of the container, combined with
// the text area. So Stats and the Textarea components are a part of the same div, and
// this is a section of the div.
export default function Stats({ numWords, numChars }) {
  return (
    <StatsWrapper>
      <Stat number={numWords} heading='Words' />
      <Stat number={numChars} heading='Characters' />
      <Stat number={280 - numChars} heading={Icons()} />
      <Stat number={2200 - numChars} heading={facebookSvg} />
    </StatsWrapper>
  );
}

function Stat({ number, heading }) {
  return (
    <StatSection>
      <StatNumber>{number}</StatNumber>
      <StatHeading>{heading}</StatHeading>
    </StatSection>
  );
}

function Icons() {
  return (
    <>
      <InstagramLogoIcon width={25} height={25}/>
      <TwitterLogoIcon width={25} height={25}/>
    </>
  );
}

const StatsWrapper = styled.section`
  flex: 1.3;
  background-color: #f1f6f8;
  display: flex;
  flex-wrap: wrap;

`;

const StatSection = styled.section`
  flex: 1 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(1),
  &:nth-child(2) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  &:nth-child(2),
  &:nth-child(4) {
    border-left: 1px solid rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 1150px) {
    padding: 15px 10px;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(4) {
      border: none;
    }
  }
`;

const StatNumber = styled.span`
  color: #4d5457;
  font-weight: 600;
  font-size: 2.2rem;
  margin-bottom: 10px;

  @media (max-width: 1150px) {
    font-size: 1.25rem;
  }
`;

const StatHeading = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  font-weight: 500;
  color: #747a7c;
`;
