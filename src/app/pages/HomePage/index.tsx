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
import CanvasContainer from './CanvasContainer';
import { useEffect, useState } from 'react';
import useWindowDimensions from 'utils/useWindowDimensions';
import TextTransition, { presets } from 'react-text-transition';

export function HomePage() {
  const {
    width: windowWidth,
    height: windowHeight,
    isMobile,
  } = useWindowDimensions();
  const [personaId, setPersonaId] = useState(2);
  const [isMerge, setIsMerge] = useState(false);

  function toggleIsMerge() {
    setIsMerge(!isMerge);
  }

  const personaList = ['DODO', 'Do-veloper', 'DoHyeon Park'];
  function setPersona(id) {
    if (!isMerge) {
      setPersonaId(id);
    }
  }
  const supportersList = ['soh22_archive', 'yeahwon__zip'];
  const supporters = supportersList.map((value, index) => {
    function onClickSupporter() {
      window.open('https://www.instagram.com/' + value, '_blank');
    }
    return <Supporter onClick={onClickSupporter}>@{value}</Supporter>;
  });
  // let intervalId;
  // useEffect(() => {
  //   if (isMerge) {
  //     intervalId = setInterval(
  //       () => {
  //         if (isMerge) {
  //           setPersonaId((personaId + 1) % 3);
  //         }
  //       },
  //       1000, // every 3 seconds
  //     );
  //   } else if (intervalId) {
  //     clearTimeout(intervalId);
  //   }
  // }, [isMerge]);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container aria-is-mobile={windowWidth - windowHeight < 400}>
        <TitleContainer>
          <Title aria-is-mobile={isMobile}>
            Hi there 👋{'\n'}This is{'\n'}
            <Highlight aria-is-mobile={isMobile}>
              <HighLightedTextTransition
                aria-is-mobile={isMobile}
                text={personaList[personaId]}
                springConfig={presets.wobbly}
              />
            </Highlight>
          </Title>
          <SubTitle>This page is under building</SubTitle>
          <p> w/</p>
          {supporters}
        </TitleContainer>
        <CanvasContainer
          personaId={personaId}
          setPersona={setPersona}
          isMerge={isMerge}
          onDoubleClick={toggleIsMerge}
        />
      </Container>
    </>
  );
}

const Container = styled(RowContainer)`
  padding: 0;
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

const HighLightedTextTransition = styled(TextTransition)`
  background-image: linear-gradient(
    transparent ${p => (p['top'] ? p['top'] : '20%')},
    ${p => (p['aria-color'] ? p['aria-color'] : '#f6bd60')}
      ${p => (p['top'] ? p['top'] : '20%')}
      ${p => (p['bottom'] ? p['bottom'] : '45%')},
    transparent ${p => (p['bottom'] ? p['bottom'] : '45%')}
  );
  transition: background-position 120ms ease-in-out 0s,
    padding 120ms ease-in-out 0s;
  background-size: 100% 200%;
  background-position: initial;
  background-color: initial;
  text-align: right;
  align-self: right;
`;

const TitleContainer = styled.div`
  text-align: right;
  padding: ${p => (p['aria-is-mobile'] ? 0 : 30)}px;
  margin: 0;
`;

const Supporter = styled.p`
  line-height: 1.5;
  cursor: pointer;
`;
