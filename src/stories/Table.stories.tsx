import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import { Table, TableData, TextWrap } from '../components/Table';
import { TableColumn } from '../components/Table/Table';
import { TableRow } from '../components/Table/TableRow';

const Spacer = styled.div`
  margin: 50px 100px 50px 20px;
`;

const tableColumnProps: TableColumn[] = [
  { title: 'name', size: 400 },
  { title: 'sector', size: 250 },
  { title: 'status', size: 150, align: 'center' },
  { title: 'description', size: 190, align: 'right' },
];

const CustomTableRow = () => (
  <TableRow>
    <TableData>
      <TextWrap>Laurens</TextWrap>
    </TableData>
    <TableData>
      <TextWrap>a cool sector</TextWrap>
    </TableData>
    <TableData>
      <TextWrap>online</TextWrap>
    </TableData>
    <TableData>
      <TextWrap>is it online?</TextWrap>
    </TableData>
  </TableRow>
);

storiesOf('Table', module).add('general', () => {
  return (
    <UnbraceThemeProvider>
      <Spacer>
        <Table columns={tableColumnProps}>
          <CustomTableRow />
          <CustomTableRow />
          <CustomTableRow />
          <CustomTableRow />
        </Table>
      </Spacer>
    </UnbraceThemeProvider>
  );
});
