import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Drawer, Button, Text } from '../components';
import { useToggle } from '@unbrace/hooks';

const DrawerStoryComponent = ({
  title,
  tooltip,
  position,
}: {
  title?: string;
  tooltip?: string;
  position?: 'left' | 'right';
}) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <React.Fragment>
      <Button onClick={toggleOpen}>{isOpen ? 'Close drawer' : 'Open drawer'}</Button>
      <Drawer
        open={isOpen}
        closeable
        onCloseDrawer={toggleOpen}
        title={title}
        closeTooltip={tooltip}
        position={position}
      >
        <div style={{ padding: '0 24px' }}>
          <Text>Drawer content</Text>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

const propsStoryConfig = {
  props: {
    propTablesExclude: [DrawerStoryComponent],
    propTables: [Drawer],
  },
};

storiesOf('Drawer', module).add(
  'position left',
  () => {
    return <DrawerStoryComponent title="Just a title" tooltip="Close" />;
  },
  { ...propsStoryConfig },
);

storiesOf('Drawer', module).add(
  'position right',
  () => {
    return <DrawerStoryComponent title="Just a title" tooltip="Close" position={'right'} />;
  },
  { ...propsStoryConfig },
);

storiesOf('Drawer', module).add(
  'no title or tooltip',
  () => {
    return <DrawerStoryComponent />;
  },
  { ...propsStoryConfig },
);
