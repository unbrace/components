import * as React from 'react';

type Props = {
  count: number;
  children: JSX.Element;
};
const SkeletonGenerator = ({ count, children: child }: Props) => (
  <React.Fragment>
    {Array(count)
      .fill('')
      .map((_, i) => React.cloneElement(child, { key: i, style: { opacity: Number(2 / i).toFixed(1) } }))}
  </React.Fragment>
);

export default SkeletonGenerator;
