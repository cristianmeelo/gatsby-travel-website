import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Image, Footer } from '../components';

const Images: React.FC<PageProps> = () => {
  return (
    <>
      <Image />
      <Footer />
    </>
  );
};

export default Images;

export const Head: HeadFC = () => <title>Images</title>;
