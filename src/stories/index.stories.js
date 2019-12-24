import React from 'react';
import { ClickOutside } from '../../compiled-components';

export default { title: 'Button' };

export const withText = () => (
  <ClickOutside
    clickOutsideHandler={() => console.log('yo boi, you clcked outside')}
  >
    <div>Hello div</div>
  </ClickOutside>
);
