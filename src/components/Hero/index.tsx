import React from 'react';

import { Button } from '../Button';
import * as S from './index.styles';

export const Hero = () => {
  return (
    <S.Container>
      <h1>Go Travel!</h1>
      <p>Plan your next trip today</p>
      <div>
        <Button>Get Started</Button>
      </div>
    </S.Container>
  );
};
