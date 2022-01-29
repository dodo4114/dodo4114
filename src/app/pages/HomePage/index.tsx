import {
  SubTitle,
  Title,
  Highlight,
  SemiTitle,
  P,
} from 'app/components/Styled';
import { Helmet } from 'react-helmet-async';

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
      <Title>
        Hi there 👋 This is <Highlight>DODO</Highlight>
      </Title>
      <SubTitle>This page is the very first version of my homepage</SubTitle>
      <SemiTitle>TODO</SemiTitle>
      {todoList.map(value => (
        <P key={value}>- {value}</P>
      ))}
    </>
  );
}
