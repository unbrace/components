import React from 'react';
import { ClickOutside } from './';

export default { title: 'Button' };

export const withText = () => (
  <ClickOutside clickOutsideHandler={() => alert('yo boi, you clcked outside')}>
    <div>Hello div</div>
  </ClickOutside>
);
