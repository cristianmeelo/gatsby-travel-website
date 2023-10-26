import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Navbar } from '../components/Navbar';
import '../css/layout.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />

      <main>
        <h1>Index Page</h1>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Go Travel!</title>;
