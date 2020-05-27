import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Heading, Text } from '../components';

const propsStoryConfig = {
  props: {
    propTablesExclude: [],
  },
};

storiesOf('Text', module).add(
  'headings',
  () => {
    return (
      <React.Fragment>
        <Heading size="xxl">Heading size xxl @ Unbrace Components</Heading>
        <Heading asTag="h1" size="xl">
          Heading size xl @ Unbrace Components
        </Heading>
        <Heading asTag="h2" size="l">
          Heading size l @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m">
          Heading size m @ Unbrace Components
        </Heading>
        <Heading asTag="h4" size="s">
          Heading size s @ Unbrace Components
        </Heading>
        <Heading asTag="h5" size="xs">
          Heading size xs @ Unbrace Components
        </Heading>
        <Heading asTag="h6" size="xxs">
          Heading size xxs @ Unbrace Components
        </Heading>
      </React.Fragment>
    );
  },
  { ...{ propsStoryConfig } },
);

storiesOf('Text', module).add(
  'text',
  () => {
    return (
      <React.Fragment>
        <Text asTag="p" size="xxl">
          Text size xxl @ Unbrace Components
        </Text>
        <Text asTag="p" size="xl">
          Text size xl @ Unbrace Components
        </Text>
        <Text asTag="p" size="l">
          Text size l @ Unbrace Components
        </Text>
        <Text asTag="p" size="m">
          Text size m @ Unbrace Components
        </Text>
        <Text asTag="p" size="s">
          Text size s @ Unbrace Components
        </Text>
        <Text asTag="p" size="xs">
          Text size xs @ Unbrace Components
        </Text>
        <Text asTag="p" size="xxs">
          Text size xxs @ Unbrace Components
        </Text>
      </React.Fragment>
    );
  },
  { ...{ propsStoryConfig } },
);

storiesOf('Text', module).add(
  'colors',
  () => {
    return (
      <React.Fragment>
        <Text asTag="p" size="m" color="primary">
          Color primary @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="primary" colorLevel="medium">
          Color primary @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="primary" colorLevel="light">
          Color primary @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="secondary">
          Color secondary @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="secondary" colorLevel="medium">
          Color secondary @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="secondary" colorLevel="light">
          Color secondary @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="success">
          Color success @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="success" colorLevel="medium">
          Color success @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="success" colorLevel="light">
          Color success @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="danger">
          Color danger @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="danger" colorLevel="medium">
          Color danger @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="danger" colorLevel="light">
          Color danger @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="warning">
          Color warning @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="warning" colorLevel="medium">
          Color warning @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="warning" colorLevel="light">
          Color warning @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="neutral">
          Color neutral @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="neutral" colorLevel="medium">
          Color neutral @ Unbrace Components
        </Text>
        <Text asTag="p" size="m" color="neutral" colorLevel="light">
          Color neutral @ Unbrace Components
        </Text>

        <Heading asTag="h3" size="m" color="primary">
          Color primary @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="primary" colorLevel="medium">
          Color primary @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="primary" colorLevel="light">
          Color primary @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="secondary">
          Color secondary @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="secondary" colorLevel="medium">
          Color secondary @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="secondary" colorLevel="light">
          Color secondary @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="success">
          Color success @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="success" colorLevel="medium">
          Color success @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="success" colorLevel="light">
          Color success @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="danger">
          Color danger @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="danger" colorLevel="medium">
          Color danger @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="danger" colorLevel="light">
          Color danger @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="warning">
          Color warning @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="warning" colorLevel="medium">
          Color warning @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="warning" colorLevel="light">
          Color warning @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="neutral">
          Color neutral @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="neutral" colorLevel="medium">
          Color neutral @ Unbrace Components
        </Heading>
        <Heading asTag="h3" size="m" color="neutral" colorLevel="light">
          Color neutral @ Unbrace Components
        </Heading>
      </React.Fragment>
    );
  },
  { ...{ propsStoryConfig } },
);

storiesOf('Text', module).add(
  'transforms & heading weights',
  () => {
    return (
      <React.Fragment>
        <Text asTag="p" transform="uppercase">
          uppercase @ Unbrace Components
        </Text>
        <Text asTag="p" transform="lowercase">
          lowercase @ Unbrace Components
        </Text>
        <Text asTag="p" transform="capitalize">
          capitalize @ Unbrace Components
        </Text>
        <Heading asTag="h1" size="m" transform="uppercase">
          uppercase @ Unbrace Components
        </Heading>
        <Heading asTag="h1" size="m" transform="lowercase">
          lowercase @ Unbrace Components
        </Heading>
        <Heading asTag="h1" size="m" transform="capitalize">
          capitalize @ Unbrace Components
        </Heading>
        <Heading asTag="h1" size="m">
          Normal weight @ Unbrace Components
        </Heading>
        <Heading asTag="h1" size="m" weight="thin">
          Thin weight @ Unbrace Components
        </Heading>
      </React.Fragment>
    );
  },
  { ...{ propsStoryConfig } },
);
