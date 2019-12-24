import { configure } from '@storybook/react';

// const req = require.context('../src', true, /\.stories\.js$/);

// function loadStories() {
//   require('./WelcomStory');
//   req.keys().forEach(file => req(file));
// }

// configure(loadStories, module);

configure(require.context('../src', true, /\.stories\.js$/), module);
