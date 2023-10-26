import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import * as S from './index.styles';

export const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["background"] }
        }
      ) {
        edges {
          node {
            name
            childrenImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <S.Container>
      <h1>View Your Destination</h1>
      <S.Grid>
        {data.allFile.edges.map((image: any, key: any) => (
          <S.Img
            key={key}
            fluid={image.node.childrenImageSharp[0].fluid}
            alt={image.node.name}
          />
        ))}
      </S.Grid>
    </S.Container>
  );
};
