import { storiesOf } from '@storybook/react';
import * as React from 'react';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import { Table } from '../components/Table';
import { TableColumn } from '../components/Table/Table';

const tableColumnProps: TableColumn[] = [
  { title: 'name', size: 'auto' },
  { title: 'sector', size: 'auto' },
  { title: 'status', size: 150, align: 'center' },
  { title: 'description', size: 72, align: 'right' },
];

storiesOf('Table', module).add('general', () => {
  return (
    <UnbraceThemeProvider>
      <Table columns={tableColumnProps}>
        <div>a row</div>
        <div>a row</div>
        <div>a row</div>
        <div>a row</div>
      </Table>
    </UnbraceThemeProvider>
  );
});
