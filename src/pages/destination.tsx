import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const DestinationPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Destination Page</h1>
    </main>
  );
};

export default DestinationPage;

export const Head: HeadFC = () => <title>Home Page</title>;
