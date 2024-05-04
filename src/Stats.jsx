import styled from 'styled-components';

// We use a section tag, because it is a section of the container, combined with
// the text area. So Stats and the Textarea components are a part of the same div, and
// this is a section of the div.
export default function Stats({numWords, numChars}) {

  return (
    <StatsWrapper>
      <Stat number={numWords} heading='Words' />
      <Stat number={numChars} heading='Characters' />
      <Stat number={280 - numChars} heading='Instagram' />
      <Stat number={2200 - numChars} heading='Facebook' />
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
`;

const StatNumber = styled.span`
  color: #4d5457;
  font-weight: 600;
  font-size: 2.2rem;
  margin-bottom: 10px;
`;

const StatHeading = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  font-weight: 500;
  color: #747a7c;
`;
