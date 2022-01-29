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

export function HomePage() {
  const todoList = [
    "What projects I've done",
    'Contacts : e-mail, open-kakao, facebook',
    'Personas : DODO, Do-veloper, Dohyeon Park',
    'Thoughts : Blog, Object for my life',
    'Make it 3D/VR + Web3?',
  ];
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <TitleContainer>
          <Title>
            Hi there 👋 This is <Highlight>DODO</Highlight>
          </Title>
          <SubTitle>
            This page is the very first version of my homepage
          </SubTitle>
        </TitleContainer>
        <Room />
      </Container>
      <SemiTitle>TODO</SemiTitle>
      {todoList.map(value => (
        <P key={value}>- {value}</P>
      ))}
    </>
  );
}

const Container = styled(RowContainer)``;

const TitleContainer = styled.div`
  text-align: right;
  padding: 30px;
`;
