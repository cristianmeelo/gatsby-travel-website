import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';
import { Hero, Navbar, Image } from '../components';
import '../css/layout.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Image />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Go Travel!</title>;
