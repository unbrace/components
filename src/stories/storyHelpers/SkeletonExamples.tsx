import * as React from 'react';
import { ContentLoader, SkeletonGenerator } from '../../components';

const SkeletonExample: React.FunctionComponent = () => (
  <SkeletonGenerator count={2}>
    <ContentLoader height={155}>
      <rect x="20" y="20" rx="5" ry="5" width="160" height="30" />
      <rect x="20" y="75" rx="5" ry="5" width="190" height="15" />
      <rect x="20" y="115" rx="5" ry="5" width="230" height="15" />
    </ContentLoader>
  </SkeletonGenerator>
);

export default SkeletonExample;
