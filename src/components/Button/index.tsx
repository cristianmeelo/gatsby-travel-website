import React from 'react';
import * as S from './index.styles';

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Button primary fontBig big>
      {children}
    </S.Button>
  );
};
