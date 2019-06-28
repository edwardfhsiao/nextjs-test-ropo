import React, { memo } from 'react';
const Index = memo(props => {
  return <div>index</div>;
});
Index.getInitialProps = async props => {
  console.log(2);
  return {};
};
export default Index;
