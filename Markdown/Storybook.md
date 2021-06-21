<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}

</style>
</head>    
<div id="stack-container">
  <a href="https://storybook.js.org/tutorials/"><img src="https://iconape.com/wp-content/files/qa/371510/svg/371510.svg" alt="Storybook Logo"></a>
</div>

# <big class="HotPink">StoryBook</big>

<div class="columns">
  <div class="column">

<span class="LightPink">We’ll build our UI following a <b class="RebeccaPurple"><big class="Violet">C</big>omponent-<big class="Violet">D</big>riven <big class="Violet">D</big>evelopment</b> methodology. It’s a process that builds UIs from the _bottom up_ starting with components and ending with screens. CDD helps you scale the amount of complexity you’re faced with as you build out the UI</span>

There are two basic levels of organization in Storybook: the <b class="IndianRed">component</b> and its <b class="HotPink">child stories</b>. Think of each story as a permutation of a component. You can have as many stories per component as you need.

<div class="columns">
  <p class="column">
    <big class="IndianRed">Component 1</big>
    <ul>
      <li class="HotPink">Story 1</li>
      <li class="HotPink">Story 2</li>
      <li class="HotPink">Story 3</li>
    </ul>
  </p>
  <p class="column">
    <big class="IndianRed">Component 2</big>
    <ul>
      <li class="HotPink">Story 1</li>
      <li class="HotPink">Story 2</li>
    </ul>
  </p>
</div>

> Introducing the **Template** pattern is a good idea

> `Template.bind( { } )` is a [standard Javascript technique](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) for making a copy of a function

  </div>

  <div class="column">

```js
// src/components/Task.stories.js

import React from 'react';

import Task from './Task';

export default {
  component: Task, // the component itself
  title: 'Task', // how to refer to the component in the sidebar of the Storybook app
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
```

  </div>
  
</div>

## Deploying

`npm run build-storybok` to output a static Storybook in the `storybook-static` directory, which can then be deployed to any static site hosting service

We an use [chromatic](https://www.chromatic.com/) to deploy our storybook app

## Testing UI Components

Testing is essential to creating high quality UIs. In modular systems, miniscule tweaks can result in major regressions

- Manual tests rely on developers to manually look at a component to verify it for correctness
  <b class="RoyalBlue">They help us sanity check a component’s appearance as we build.</b>
- Snapshot tests with Storyshots capture a component’s rendered markup
  <b class="RoyalBlue">They help us stay abreast of markup changes that cause rendering errors and warnings.</b>
- Unit tests with Jest verify that the output of a component remains the same given a fixed input
  <b class="RoyalBlue">They’re great for testing the functional qualities of a component.</b>

<b class="HotPink"><big>Visual Regression</big></b>

<video src="https://storybook.js.org/tutorials/intro-to-storybook/visual-regression-testing.mp4" controls width=1000></video>