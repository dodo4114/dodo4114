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
import { useControlSlice } from 'app/slices/controlSlice';
import { selectControl } from 'app/slices/controlSlice/selectors';
import useWindowDimensions from 'utils/useWindowDimensions';
import TextTransition, { presets } from 'react-text-transition';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'app/components/Modal';

export function HomePage() {
  const {
    width: windowWidth,
    height: windowHeight,
    isMobile,
  } = useWindowDimensions();
  const [personaId, setPersonaId] = useState(0);
  const [isMerge, setIsMerge] = useState(false);

  function toggleIsMerge() {
    setIsMerge(!isMerge);
  }

  // ModalControl
  const dispatch = useDispatch();
  const control = useSelector(selectControl);
  const { actions: controlAction } = useControlSlice();
  const detailModalState = control.detailModalState;
  const detailShow = detailModalState.isOpen;
  const detailData = detailModalState.data;

  const personaList = [
    { name: 'DODO', description: 'Entrepreneur, Pioneer,\n DOer' },
    {
      name: 'Do-veloper',
      description: 'Developer who just do, try, learn and create.',
    },
    {
      name: 'DoHyeon Park',
      description:
        'A human being who is very interested in theater, art and novels.',
    },
  ];
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
        <Modal
          open={detailShow}
          onClose={() => {
            dispatch(controlAction.closeDetailModal());
          }}
        >
          <div></div>
        </Modal>
        <TitleContainer>
          <Description
            onClick={() => {
              dispatch(
                controlAction.setDetailModal({
                  isOpen: true,
                  data: { title: 'hi', body: 'bye' },
                }),
              );
            }}
          >
            Click other room to change,{'\n'}double-click empty space to
            merge/seperate.
          </Description>
          <Title aria-is-mobile={isMobile}>
            Hi there 👋{'\n'}This is{'\n'}
            <Highlight aria-is-mobile={isMobile}>
              <HighLightedTextTransition
                inline
                aria-is-mobile={isMobile}
                text={personaList[personaId].name}
                springConfig={presets.gentle}
              />
            </Highlight>
          </Title>
          <PersonaDescription>
            {/* <PersonaDescriptionTransition
              inline
              text={personaList[personaId].description}
              springConfig={presets.gentle}
            /> */}
            {personaList[personaId].description}
          </PersonaDescription>
          <P>CONTACT : dodo41142727@gmail.com</P>
          <P>This page is still under construction{'\n'}w/</P>
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
  height: 100vh;
  width: 100vw;
  padding: 0;
  align-self: center;
  ${p =>
    p['aria-is-mobile']
      ? 'flex-direction:column-reverse;   justify-content: flex-start;'
      : ''}

  ${Title} {
    ${p => (p['aria-is-mobile'] ? 'font-size: 2rem;' : '')}
    width:100%;
  }

  ${Highlight} {
    ${p => (p['aria-is-mobile'] ? 'font-size: 3rem;' : '')}
  }
`;

const TitleContainer = styled.div`
  text-align: right;
  padding: ${p => (p['aria-is-mobile'] ? 0 : 30)}px;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  max-width: 80vh;
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

const PersonaDescriptionTransition = styled(TextTransition)`
  font-size: 3rem;
  line-height: 1.5;
  color: gray;
  margin: 0.625rem 0 1.5rem 0;
  width: 100%;
  max-width: 600px;
  text-align: right;
  align-self: right;
  white-space: pre-wrap;
`;

const Supporter = styled(P)`
  line-height: 1.5;
  cursor: pointer;
`;

const Description = styled(P)`
  white-space: pre-wrap;
`;

const PersonaDescription = styled(SubTitle)`
  font-weight: normal;
  white-space: pre-wrap;
`;
