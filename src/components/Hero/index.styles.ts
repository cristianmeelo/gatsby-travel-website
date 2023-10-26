import styled from 'styled-components';
import img from '../../images/background.jpg';

export const Container = styled.main`
  background: url(${img}) no-repeat right top;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;

  h1 {
    color: #fff;
    font-size: 100px;
    margin-top: 32px;
  }

  p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
  }

  div {
    margin-top: 32px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 960px) {
    h1 {
      font-size: 70px;
    }
  }
`;
