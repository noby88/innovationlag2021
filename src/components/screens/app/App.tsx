import { useState } from 'react';
import Button from '../../basic/button/Button';
import Stepper from '../../basic/stepper/Stepper';
import Title from '../../basic/title/Title';
import Page from '../../complex/page/Page';

import { MainContainer } from './styles';

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <MainContainer>
      <Stepper selectedItem={index}>
        <Page>
          <Title>Random title</Title>
          <Button onClick={() => setIndex(1)}>Go to next screen</Button>
        </Page>
        <Page>
          <Title>Second random title</Title>
          <Button onClick={() => setIndex(0)}>Go back! Go BACK!</Button>
        </Page>
      </Stepper>
    </MainContainer>
  );
};

export default App;
