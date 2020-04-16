import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Paginator } from '../components';

const PaginatorExample: React.FC = () => {
  const [index, setIndex] = React.useState(1);
  const [size, setSize] = React.useState(20);

  return (
    <Paginator
      pageIndex={index}
      pageSize={size}
      totalItems={1000}
      hasNextPage={true}
      onPageIndexChange={val => setIndex(val)}
      onPageSizeChange={val => setSize(val)}
      pageSizes={[5, 10, 20, 50, 100]}
    />
  );
};

storiesOf('Paginator', module).add(
  'default',
  () => {
    return <PaginatorExample />;
  },
  {
    props: {
      propTablesExclude: [PaginatorExample],
      propTables: [Paginator],
    },
  },
);
