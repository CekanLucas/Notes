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