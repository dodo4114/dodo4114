import { P, Title } from 'app/components/Styled';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Title>Hi there 👋 This is DODO</Title>
      <P>This page is very first version of my homepage</P>
    </>
  );
}
