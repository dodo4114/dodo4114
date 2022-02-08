import {
  SubTitle,
  Title,
  Highlight,
  SemiTitle,
  P,
  RowContainer,
} from 'app/components/Styled';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Room from './Room';
import { useEffect, useState } from 'react';
import useWindowDimensions from 'utils/useWindowDimensions';
import { useScroll } from 'utils/useScroll';

export function HomePage() {
  const {
    width: windowWidth,
    height: windowHeight,
    isMobile,
  } = useWindowDimensions();
  const [personaId, setPersonaId] = useState(2);

  const personaList = ['DODO', 'Do-veloper', 'DoHyeon Park'];
  const { scrollY } = useScroll();

  function setPersona(id) {
    setPersonaId(id);
  }

  useEffect(() => {
    console.log(scrollY);
    // setPersonaId(id);
  }, [scrollY]);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container aria-is-mobile={windowWidth - windowHeight < 600}>
        <TitleContainer>
          <Title aria-is-mobile={isMobile}>
            Hi there 👋 This is{'\n'}
            <Highlight aria-is-mobile={isMobile}>
              {personaList[personaId]}
            </Highlight>
          </Title>
          {/* <SubTitle>
            This page is the very first version of my homepage
          </SubTitle> */}
        </TitleContainer>
        <Room personaId={personaId} setPersona={setPersona} />
      </Container>
    </>
  );
}

const Container = styled(RowContainer)`
  align-self: center;
  ${p =>
    p['aria-is-mobile']
      ? 'flex-direction:column-reverse;   justify-content: flex-start;'
      : ''}

  ${Title} {
    ${p => (p['aria-is-mobile'] ? 'font-size: 2rem;' : '')}
  }

  ${Highlight} {
    ${p => (p['aria-is-mobile'] ? 'font-size: 3rem;' : '')}
  }
`;

const TitleContainer = styled.div`
  text-align: right;
  padding: ${p => (p['aria-is-mobile'] ? 0 : 30)}px;
  margin: 0;
`;
