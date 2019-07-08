import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return ( 
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="blue"/>
    </Wrapper>
  );
}

Hello.defaultProps = {
  name: '이름없음'
};

export default App;