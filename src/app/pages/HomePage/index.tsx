import {
  SubTitle,
  Title,
  Highlight,
  SemiTitle,
  P,
  Container as ColumnContainer,
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
import MediumIcon from './MediumIcon';
import { Spacer } from 'app/components/Spacer';

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

  function openModal(data) {
    dispatch(
      controlAction.setDetailModal({
        isOpen: true,
        data: data,
      }),
    );
  }

  const personaList = [
    {
      name: 'DODO',
      description:
        'Entrepreneur, Pioneer, DOer. Finding my own co-founding members.',
    },
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

  const isColumn = windowWidth - windowHeight < 400;
  const canvasSize = Math.min(
    Math.max(windowWidth, windowHeight) / 2,
    windowWidth,
    windowHeight,
  );
  const titleHeight = isColumn ? windowHeight - canvasSize : windowHeight;
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container aria-is-mobile={isColumn}>
        <Modal
          open={detailShow}
          onClose={() => {
            dispatch(controlAction.closeDetailModal());
          }}
          data={detailData}
        ></Modal>
        <TitleContainerWrapper aria-height={titleHeight}>
          <TitleContainer aria-height={titleHeight}>
            <Spacer height={100} />
            <Description>
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
            <MediumIcon size={50} />
            <P>This page is still under construction{'\n'}w/</P>
            {supporters}
            <Spacer height={100} />
          </TitleContainer>
        </TitleContainerWrapper>
        <CanvasContainer
          canvasSize={canvasSize}
          personaId={personaId}
          setPersona={setPersona}
          isMerge={isMerge}
          onDoubleClick={toggleIsMerge}
          openModal={openModal}
        />
      </Container>
    </>
  );
}

const Container = styled(RowContainer)`
  height: 100vh;
  width: 100vw;
  flex: 1;
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

const TitleContainerWrapper = styled(ColumnContainer)`
  flex: 1;
  height: ${p => p['aria-height']}px;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 80vh;
`;
const TitleContainer = styled(ColumnContainer)`
  text-align: right;
  padding: ${p => (p['aria-is-mobile'] ? 0 : 30)}px;
  margin: 0;
  height: ${p => p['aria-height']}px;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: flex-end;
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
