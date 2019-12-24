import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.js$/);

function loadAllStories() {
  require('./WelcomStory');
  req.keys().forEach(file => req(file));
}

configure(loadAllStories, module);
