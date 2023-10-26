import styled from 'styled-components';

type StyledButton = {
  primary: boolean;
  big: boolean;
  fontBig: boolean;
};

export const Button = styled.button<StyledButton>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#FF4040' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? '#0467FB' : '#FF4040')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
