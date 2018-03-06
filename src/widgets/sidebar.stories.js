import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Sidebar from './sidebar';


storiesOf('Button', module)
  .add('with text', () => (
    <Sidebar onClick={action('clicked')} />
  ))
  .add('with some emoji', () => (
    <Sidebar onClick={action('clicked')} />
  ));
