import React, { memo } from 'react';
import { Container } from 'next/app';
const Index = memo(({ Component, router }) => {
  return (
    <Container>
      <Component router={router} />
    </Container>
  );
});
Index.getInitialProps = async props => {
  console.log(1);
  return {};
};
export default Index;
