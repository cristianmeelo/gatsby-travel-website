import styled from 'styled-components';
import MeuImgPersonalizado from 'gatsby-image';

export const Container = styled.section`
  text-align: center;
  margin: 150px;

  h1 {
    margin-bottom: 64px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 32px;
`;

export const Img = styled(MeuImgPersonalizado)`
  /* &:nth-child(5) {
    grid-column-end: span 2;
  }
  &:nth-child(9) {
      grid-column-start: span 4;
      grid-column-end: span 2;
  } */

  &:hover {
    transform: scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }
`;
