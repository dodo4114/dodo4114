import styled from 'styled-components/macro';

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: black;
  margin: 0.625rem 0 1.5rem 0;
`;
export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.5;
  color: black;
  margin: 0.625rem 0 1.5rem 0;
  white-space: pre-wrap;
`;

export const SubTitle = styled.h2`
  font-size: 3rem;
  line-height: 1.5;
  color: gray;
  margin: 0.625rem 0 1.5rem 0;
`;
export const SemiTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  color: black;
  margin: 0.625rem 0 1.5rem 0;
`;

export const Highlight = styled.span`
  background-image: linear-gradient(
    transparent ${p => (p['top'] ? p['top'] : '20%')},
    ${p => (p.color ? p.color : '#f6bd60')}
      ${p => (p['top'] ? p['top'] : '20%')}
      ${p => (p['bottom'] ? p['bottom'] : '45%')},
    transparent ${p => (p['bottom'] ? p['bottom'] : '45%')}
  );
  transition: background-position 120ms ease-in-out 0s,
    padding 120ms ease-in-out 0s;
  background-size: 100% 200%;
  background-position: initial;
  background-color: initial;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const RowContainer = styled(Container)`
  flex-direction: row;
`;
