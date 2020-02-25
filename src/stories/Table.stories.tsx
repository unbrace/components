import { storiesOf } from '@storybook/react';
import * as React from 'react';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import {
  Table,
  Text,
  TableBody,
  TableHead,
  TableRow,
  TableHeadCell,
  TableCell,
  TableActions,
  IconButton,
  Close,
  Checkmark,
} from '../components';

storiesOf('Table', module).add(
  'simple',
  () => {
    return (
      <UnbraceThemeProvider>
        <Table
          columns={[
            { id: 1, content: 'Food' },
            { id: 2, content: 'Serving', align: 'right', size: 200 },
            { id: 3, content: 'Calories', align: 'right', size: 200 },
          ]}
          data={[
            { id: 1, cells: ['BBQ Ribs', '1 rib (141g)', '360 cal'] },
            { id: 2, cells: ['Corn Dog', '1 item (175g)', '438 cal'] },
            { id: 3, cells: ['Lasagne', '1 serving (215 g)', '284 cal'] },
            { id: 4, cells: ['Mac & Cheese', '1 serving (189 g)', '699 cal'] },
            { id: 5, cells: ['Mashed Potatoes', '1 cup (210 g)', '174 cal'] },
          ]}
        />
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTablesExclude: [UnbraceThemeProvider],
    },
  },
);

storiesOf('Table', module).add(
  'component values',
  () => {
    return (
      <UnbraceThemeProvider>
        <Table
          columns={[
            { id: 1, content: 'Food' },
            { id: 2, content: 'Serving', align: 'right', size: 200 },
            { id: 3, content: 'Calories', align: 'right', size: 200 },
          ]}
          data={[
            {
              id: 1,
              cells: [
                <React.Fragment key="1">
                  <Text size="xs">BBQ Ribs</Text>
                  <Text size="xs" colorLevel="medium">
                    Tasty AF
                  </Text>
                </React.Fragment>,
                '1 rib (141g)',
                '360 cal',
              ],
            },
            { id: 2, cells: ['Corn Dog', '1 item (175g)', '438 cal'] },
            {
              id: 3,
              cells: [
                <React.Fragment key="1">
                  <Text size="xs">Lasagne</Text>
                  <Text size="xs" colorLevel="medium">
                    Ooh yeah
                  </Text>
                </React.Fragment>,
                '1 serving (215 g)',
                '284 cal',
              ],
            },
            { id: 4, cells: ['Mac & Cheese', '1 serving (189 g)', '699 cal'] },
            { id: 5, cells: ['Mashed Potatoes', '1 cup (210 g)', '174 cal'] },
          ]}
        />
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTablesExclude: [UnbraceThemeProvider],
    },
  },
);

storiesOf('Table', module).add(
  'use of separate components',
  () => {
    return (
      <UnbraceThemeProvider>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Food</TableHeadCell>
              <TableHeadCell align="right" size={200}>
                Serving
              </TableHeadCell>
              <TableHeadCell align="right" size={200}>
                Calories
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <React.Fragment key="1">
                  <Text size="xs">BBQ Ribs</Text>
                  <Text size="xs" colorLevel="medium">
                    Tasty AF
                  </Text>
                </React.Fragment>
              </TableCell>
              <TableCell align="right">1 rib (141g)</TableCell>
              <TableCell align="right">360 cal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Corn Dog</TableCell>
              <TableCell align="right">1 item (175g)</TableCell>
              <TableCell align="right">438 cal</TableCell>
            </TableRow>
            <TableRow isActive>
              <TableCell>
                <React.Fragment key="1">
                  <Text size="xs">Lasagne (is active)</Text>
                  <Text size="xs" colorLevel="medium">
                    Ooh yeah
                  </Text>
                </React.Fragment>
              </TableCell>
              <TableCell align="right">1 serving (215 g)</TableCell>
              <TableCell align="right">284 cal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mac & Cheese</TableCell>
              <TableCell align="right">1 serving (189 g)</TableCell>
              <TableCell align="right">699 cal</TableCell>
            </TableRow>
            <TableRow onClick={() => alert('add some cheese')}>
              <TableCell>Mashed Potatoes (is clickable)</TableCell>
              <TableCell align="right">1 cup (210 g)</TableCell>
              <TableCell align="right">174 cal</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTablesExclude: [UnbraceThemeProvider],
    },
  },
);

storiesOf('Table', module).add(
  'row actions',
  () => {
    return (
      <UnbraceThemeProvider>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Food</TableHeadCell>
              <TableHeadCell align="right" size={200}>
                Serving
              </TableHeadCell>
              <TableHeadCell align="right" size={200}>
                Calories
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <React.Fragment key="1">
                  <Text size="xs">BBQ Ribs</Text>
                  <Text size="xs" colorLevel="medium">
                    Tasty AF
                  </Text>
                </React.Fragment>
              </TableCell>
              <TableCell align="right">1 rib (141g)</TableCell>
              <TableCell align="right">
                360 cal
                <TableActions>
                  <IconButton>
                    <Close />
                  </IconButton>
                </TableActions>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Corn Dog</TableCell>
              <TableCell align="right">1 item (175g)</TableCell>
              <TableCell align="right">
                438 cal
                <TableActions>
                  <IconButton tooltip="Get out">
                    <Close />
                  </IconButton>
                  <IconButton tooltip="Check yourself">
                    <Checkmark />
                  </IconButton>
                </TableActions>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <React.Fragment key="1">
                  <Text size="xs">Lasagne</Text>
                  <Text size="xs" colorLevel="medium">
                    Ooh yeah
                  </Text>
                </React.Fragment>
              </TableCell>
              <TableCell align="right">1 serving (215 g)</TableCell>
              <TableCell align="right">
                284 cal
                <TableActions>
                  <IconButton tooltip="Get out">
                    <Close />
                  </IconButton>
                </TableActions>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mac & Cheese</TableCell>
              <TableCell align="right">1 serving (189 g)</TableCell>
              <TableCell align="right">
                699 cal
                <TableActions>
                  <IconButton tooltip="Get out">
                    <Close />
                  </IconButton>
                </TableActions>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mashed Potatoes</TableCell>
              <TableCell align="right">1 cup (210 g)</TableCell>
              <TableCell align="right">
                174 cal
                <TableActions>
                  <IconButton tooltip="Get out">
                    <Close />
                  </IconButton>
                  <IconButton tooltip="Check yourself">
                    <Checkmark />
                  </IconButton>
                </TableActions>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTablesExclude: [UnbraceThemeProvider],
    },
  },
);
