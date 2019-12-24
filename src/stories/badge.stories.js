import React from 'react';
import { Badge } from '../../bundled-components';
import { storiesOf } from '@storybook/react';

// export const defaultBadge = () => <Badge color="success">Success badge</Badge>;

storiesOf('Badge', module).add('success', () => <Badge color="success">Badge</Badge>);
