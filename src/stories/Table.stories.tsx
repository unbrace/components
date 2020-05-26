import { storiesOf } from '@storybook/react';
import * as React from 'react';
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
  SubRows,
  Badge,
  SortTableHeadCell,
  SortOrder,
} from '../components';

storiesOf('Table', module).add(
  'simple',
  () => {
    const [order, setOrder] = React.useState(SortOrder.OFF);
    const [animate, setAnimate] = React.useState(false);

    const handleSort = () => {
      setOrder(order === SortOrder.ASC ? SortOrder.DESC : order === SortOrder.DESC ? SortOrder.OFF : SortOrder.ASC);
    };

    return (
      <>
        <Table
          enableAnimation
          animate={animate}
          columns={[
            {
              id: 1,
              content: 'Food',
              onSort: handleSort,
              sortOrder: order,
            },
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
        <button onClick={() => setAnimate(!animate)}>Animate</button>
      </>
    );
  },
  {
    props: {
      propTablesExclude: [],
    },
  },
);

storiesOf('Table', module).add(
  'component values',
  () => {
    return (
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
    );
  },
  {
    props: {
      propTablesExclude: [],
    },
  },
);

storiesOf('Table', module).add(
  'simple without use of data prop',
  () => {
    const [order, setOrder] = React.useState(SortOrder.OFF);

    const handleSort = () => {
      setOrder(order === SortOrder.ASC ? SortOrder.DESC : order === SortOrder.DESC ? SortOrder.OFF : SortOrder.ASC);
    };

    return (
      <Table
        columns={[
          {
            id: 1,
            content: 'Food',
            onSort: handleSort,
            sortOrder: order,
          },
          { id: 2, content: 'Serving', align: 'right', size: 200 },
          { id: 3, content: 'Calories', align: 'right', size: 200 },
        ]}
      >
        <TableRow>
          <TableCell>
            <React.Fragment key="1">
              <Text size="xs">BBQ Ribs</Text>
              <Text size="xs" colorLevel="medium">
                Tasty AF
              </Text>
            </React.Fragment>
          </TableCell>
          <TableCell>1 rib (141g)</TableCell>
          <TableCell>360 cal</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Corn Dog</TableCell>
          <TableCell>1 item (175g)</TableCell>
          <TableCell>438 cal</TableCell>
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
          <TableCell>1 serving (215 g)</TableCell>
          <TableCell>284 cal</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mac & Cheese</TableCell>
          <TableCell>1 serving (189 g)</TableCell>
          <TableCell>699 cal</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mashed Potatoes</TableCell>
          <TableCell>1 cup (210 g)</TableCell>
          <TableCell>174 cal</TableCell>
        </TableRow>
      </Table>
    );
  },
  {
    props: {
      propTablesExclude: [],
    },
  },
);

storiesOf('Table', module).add(
  'use of separate components',
  () => {
    return (
      <Table>
        <TableHead>
          <TableRow isStatic>
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
    );
  },
  {
    props: {
      propTablesExclude: [],
    },
  },
);

storiesOf('Table', module).add(
  'row actions',
  () => {
    return (
      <Table>
        <TableHead>
          <TableRow isStatic>
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
    );
  },
  {
    props: {
      propTablesExclude: [],
    },
  },
);

storiesOf('Table', module).add(
  'sub rows',
  () => {
    return (
      <Table>
        <TableHead>
          <TableRow isStatic>
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
          <SubRows colSpan={3} gutter={{ left: 56, bottom: 32 }} enableAnimation>
            <TableRow>
              <TableCell size={80}>
                <Badge size="small" color="primary">
                  01
                </Badge>
              </TableCell>
              <TableCell>
                <Text size="xs">
                  Preheat oven to 375º. In a large pot of salted boiling water, cook pasta according to package
                  directions until al dente, less 2 minutes. Drain and drizzle a bit of olive oil to prevent noodles
                  from sticking together.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell size={80}>
                <Badge size="small" color="primary">
                  02
                </Badge>
              </TableCell>
              <TableCell>
                <Text size="xs">
                  Meanwhile, in a large pot over medium-high heat, heat oil. Cook ground beef until no longer pink,
                  breaking up with a wooden spoon, then drain fat. Return beef to skillet and add garlic and oregano and
                  stir for 1 minute. Season with salt and pepper, then add marinara and stir until warmed through.{' '}
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell size={80}>
                <Badge size="small" color="primary">
                  03
                </Badge>
              </TableCell>
              <TableCell>
                <Text size="xs">
                  Combine ricotta, 1/4 cup Parmesan, and parsley in a large mixing bowl and season with salt and pepper.
                  Set aside.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell size={80}>
                <Badge size="small" color="primary">
                  04
                </Badge>
              </TableCell>
              <TableCell>
                <Text size="xs">
                  In a large casserole dish, spread a thin layer of meat sauce, a single layer of lasagna noodles, a
                  layer of ricotta mixture, and a single layer of mozzarella, then repeat layers. Top last layer of
                  noodles with meat sauce, Parmesan, and mozzarella.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell size={80}>
                <Badge size="small" color="primary">
                  05
                </Badge>
              </TableCell>
              <TableCell>
                <Text size="xs">
                  Cover with foil and bake for 15 minutes, then increase temperature to 400º and bake uncovered for 18
                  to 20 minutes. Garnish with parsley and serve.
                </Text>
              </TableCell>
            </TableRow>
          </SubRows>
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
    );
  },
  {
    props: {
      propTablesExclude: [],
    },
  },
);

storiesOf('Table', module).add(
  'row actions',
  () => {
    const [orderFood, setOrderFood] = React.useState(SortOrder.ASC);
    const [orderServing, setOrderServing] = React.useState(SortOrder.ASC);

    return (
      <Table>
        <TableHead>
          <TableRow isStatic>
            <SortTableHeadCell
              active
              sortOrder={orderFood}
              onClick={() =>
                setOrderFood(
                  orderFood === SortOrder.ASC
                    ? SortOrder.DESC
                    : orderFood === SortOrder.DESC
                    ? SortOrder.OFF
                    : SortOrder.ASC,
                )
              }
            >
              Food
            </SortTableHeadCell>
            <SortTableHeadCell
              active={false}
              align="right"
              size={200}
              sortOrder={orderServing}
              onClick={() =>
                setOrderServing(
                  orderServing === SortOrder.ASC
                    ? SortOrder.DESC
                    : orderServing === SortOrder.DESC
                    ? SortOrder.OFF
                    : SortOrder.ASC,
                )
              }
            >
              Serving
            </SortTableHeadCell>
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
          <TableRow isActive>
            <TableCell>Corn Dog</TableCell>
            <TableCell align="right">1 item (175g)</TableCell>
            <TableCell align="right">
              438 cal
              <TableActions isInActiveRow>
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
    );
  },
  {
    props: {
      propTablesExclude: [],
    },
  },
);
