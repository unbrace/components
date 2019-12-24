import * as React from 'react';
import Badge from '../components/Badge';
import { storiesOf } from '@storybook/react';

storiesOf('Badge', module).add('success', () => <Badge color="success">Badge</Badge>);
