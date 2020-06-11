<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
img {
    height:30vh;
    float:right;
}
#exp {
  float:none;
  height: 70vh;
  text-align:center;
}
</style>
</head>    

# Testing
## Types of Tests
- <span class="RoyalBlue">Static</span>
- <Span class="Violet"> 	Unit </Span> 
- <Span class="Peru"> 	Integration </Span>
- <Span class="Lime"> 	End-to-End </Span>

> <span class="Orange">As we move from the top of the list to the bottom, we increase the cost and the amount of time needed to perform the tests.</span>


![Image of Testing Lighthouse](https://s3-us-west-2.amazonaws.com/reactv2/figures/dc72db11-61e9-4b79-94c7-e55619b2baf4.png)

## <span class="RoyalBlue">Static</span>

- <span class="RoyalBlue">We have been using ESlint</span> 
- <span class="RoyalBlue">Prettier is a more automatic formatter</span> 
- <span class="RoyalBlue">Typescript and Flow are used to help with type and keep errors minimum</span>

## <span class="Violet">Unit</span>

> <span class="Violet">**Goal is to test a specific Function or unit in isolation*</span>*
- <span class="Violet">Storybook test components in isolation</span>
- <span class="Violet">We already used Jest to test the hooks</span>

## <span class="Peru">Integration</span>

> <span class="Peru">Third is the process of proving that two or more units of code work together</span>

<span class="Peru">The risk of writing a lot of integration tests is overlapping coverage. If we are testing these two units with an integration test, we may not want to maintain two additional unit tests as well</span>.

## <span class="Lime">End-to-End</span>

> <span class="Lime">The goal is to get as close to simulated user behaviour as possible</span>

- <span class="Lime"> Most expensive category of testing </span>
- <span class="Lime"> We gain a lot of confidence in the application by applying these types of tests but have to accept the higher cost of implementation, maintenance, and runtime.</span>

- <span class="Lime">When we change our application behaviour then we may need to update our tests to reflect these changes. We can learn techniques that help minimize the coupling of our tests to our implementation. The maintenance costs go down as a result.</span>

- <span class="Lime">Loading a browser and simulating user actions increases the runtime of our tests. No matter how long it takes, we can always be sure that it would take longer to do manually. We won't spend a lot of time worrying about this for our project.</span>

- <span class="Lime">We will use **<span class="Green">Jest</span>** and **<span class="Green">Cypress</span>** to write unit and integration tests for our React application. Our end-to-end tests will be written exclusively in the Cypress environment.</span>

# Test Driven Development

The goal of Test-Driven Development is ***Clean code that works***. The book T*est-Driven Development By Example* by Kent Beck, suggests that we follow two rules to achieve this goal.

1. Write new code only if an automated test has failed
1. Eliminate duplication

Some developers decide to use pure TDD, while others may apply it only in certain situations. It can be an excellent technique for new developers because it encourages the understanding of the requirements before we write a single line of application code.

<span class="Red">**Red** - Write a small test that doesn't pass.</span>

<span class="Green">**Green** - Do the minimal amount of work to make the test pass.</span>

<span class="Yellow">**Refactor** - Improve the code, continuing to ensure all tests still pass.</span>


# Jest

Default paths
- src/components/\_\_tests__/Button.js
- src/components/Button.test.js
- src/components/Button.spec.js

## Setup and Teardown

The setup and teardown methods allow us to execute functions before and after the tests are run. There are four functions available to us, each with a descriptive name. We will be returning to these in future activities.

  - `beforeAll(fn, timeout)`
  - `beforeEach(fn, timeout)`
  - `afterEach(fn, timeout)`
  - `afterAll(fn, timeout)`

Jest puts a number of methods in the global environment for test files. This is why we can use it and afterEach without importing them. 

### prop-types 
We could get into trouble with typing in the wild people ussually use typescrpt or flow but we can use optional library prop-types maintained by the React type

```js
  // validate type with prop-type library
  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };
```

In browser Dev Tool console 
```
Warning: Failed prop type: Invalid prop `value` of type `string` supplied to `InterviewerList`, expected `number`.
    in InterviewerList (at Form.js:53)
    in Form (at Appointment/index.js:74)
    in article (at Appointment/index.js:67)
    in Appointment (at Application.js:21)
    in section (at Application.js:50)
    in main (at Application.js:33)
    in Application (at src/index.js:8)
```

# Unit Testing

1. **Initialize** the component that we would like to test
2. **Trigger** the change that executes the unit
3. **Verify** that the unit produced the expected result

*see scheduler test file for button*

```js
it("renders without crashing", () => {
  render(<Button />);
});

it("renders its `children` prop as text", () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText("Default")).toBeInTheDocument();
});

```

### Second test 
- `render` function is imported from the `react-testing-library`
- `expect` function is injected into the global scope by Jest
- `getByText` [query function](https://testing-library.com/docs/dom-testing-library/api-queries) is returned by the render function but is a part of the the `dom-testing-library`
- `toBeInTheDocument` function is a [matcher](https://jestjs.io/docs/en/expect) provided through Jest by the `jest-dom` library

## Jest <sub class=Red>Testing Framework</sub>
![Jest Logo](https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png) 

See [documentation](https://jestjs.io/docs/en/expect) if you cant remember all the functions

examples `toBe` `toHaveLength` `toHaveProperty` `toBeGreaterThan`

## [jest-dom](https://github.com/testing-library/jest-dom)

The [jest-dom](https://github.com/testing-library/jest-dom) library provides the DOM specific <span class="Orange">matchers</span>. This library is the source of the `toBeInDocument` matcher. The `toHaveClass` and `toHaveValue` <span class="Orange">matchers</span> are examples of the types of helpers that make DOM testing easier. These <span class="Orange">matchers</span> help us verify <u>_expected behaviour_</u>

## react-testing-library

The `react-testing-library` is one of many view testing library implementations in the [Testing Library collection](https://testing-library.com/). It provides React specific helper functions, including the `render` function.

When we call the `render` function, we gain access to functions that help us interact with the DOM. The `rerender` and `unmount` helpers are examples of React specific API. The `react-testing-library` inherits access to a variety of [queries](https://testing-library.com/docs/dom-testing-library/api-queries) provided by the `dom-testing-library`.

> The other functions that we can import from the react-testing-library are `cleanup` and `act`.

## dom-testing-library

The queries come from the `dom-testing-library`. A query is a combination of a query variant and a query type. The query we want to use is `getByText`. The variant is `getBy` and the type is `ByText`. 

We can also combine the variant `getBy` with the type `ByLabelText` to access the `getByLabelText` query.

<img id=exp src="https://s3-us-west-2.amazonaws.com/reactv2/figures/23300e6b-d342-4dcf-b9ed-343e89f54619.png" alt="">

## Expecting

We use the helpers to implement each phase of the test. Our example is testing that the text "Default" is in the document after we render the `<Button>Default</Button>` component. We expect that an element with the text "Default" is somewhere in the document.

Storybook is a test environment that we use to isolate components. We render a component with specific props, and then we verify with our eyes that the component is working as expected. Our brains expect to see the text "Default" within a button in the document.

There are a lot of examples of different assertions that we can make about the nodes returned by queries.

   ` expect(getByText("Default")).toHaveClass("button");`
    `expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");`
    `expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");`

There is no shortcut to learning the queries and matchers. Having to constantly look them up will make writing tests slow at first. Most testing solutions follow this pattern but don't always use the same terminology.

#### Example <span class="Green">-line-by-line</span>
```js
/*
-- In Appointment.test.js --
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";

/*
  A test that renders a React Component

  --describe--
  groups related tests
*/


/*
  A test that renders a React Component

  describe
    - groups related tests under one function
  it 
    - actual test
  test
    - alias of it
*/
describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});
```
# Testing Specific Files

We want to become familiar with the available watch options. When we press the `w` key in **watch mode**, we are presented with a list of options.

-  Press `a` to run all tests.
-  Press `f` to run only failed tests.
-  Press `q` to quit watch mode.
-  Press `p` to filter by a filename regex pattern.
-  Press `t` to filter by a test name regex pattern.
-  Press `Enter` to trigger a test run.

Change the watch mode to `p` and type in `Appointment` to only run the `Appointment.test.js` file after each update.
