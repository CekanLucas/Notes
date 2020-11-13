<head>
 
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 



</style>
</head>    

# Reducers 

You have already used reducers with `Array.prototype.reduce` it is a common pattern to go through a array or similiar data structure and reducing it to one value

```Javascript
array.reduce( (accumulator, value) => {
  // code here
}, /* accumulator initial value */)
```

We will use the `useReducer` Hook that React provides. The `useReducer` Hook is an alternative to the useState Hook and is preferred when we are managing more complex state logic.

We don't know all of the actions that will be taken by the user when the application loads. When we want to alter the state with a reducer, we `dispatch` an action that describes the change we want to make. In this example of a boring calculator, we can see the three buttons used to `dispatch` actions.

```Javascript
function reducer(state, action) {
  if (action.type === "add") {
    return state + action.value;
  }
  if (action.type === "subtract") {
    return state - action.value;
  }
  if (action.type === "multiply") {
    return state * action.value;
  }

  return state;
}

function BoringCalculator() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch({ type: "add", value: 3 })}>Add 3</button>
      <button onClick={() => dispatch({ type: "subtract", value: 5 })}> Subtract 5</button>
      <button onClick={() => dispatch({ type: "add", value: 7 })}>Add 7</button>
      <button onClick={() => dispatch({ type: "multiply", value: 2 })}>Multiply 2</button>
      <h2>{state}</h2>
    </div>
  );
}

```

When we `dispatch` an action, we expect the *reducer* to handle it and replace the current state. When the component renders, it will use the latest state to generate an updated view.

## Reducers and State Management 
### Switch/Case

>Below is what we are talking about
```js
function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return state + action.value;
    }

    case "subtract": {
      return state - action.value;
    }

    default: {
      return state;
    }
  }
}

```
Apparently this way is prone to errors becuase of the way data is mutated when you use switch/case statements.

### Object Lookup

```js
const reducers = {
  add(state, action) {
    return state + action.value;
  },
  subtract(state, action) {
    return state - action.value;
  }
};

function reducer(state, action) {
  return reducers[action.type](state, action) || state;
}
```
### Using Constants

With any of these patterns, we can also define the action types as constant values instead. This technique can help prevent bugs due to incorrect spelling of strings. If we misuse a variable, we will get a `ReferenceError`.

```js
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

function reducer(state, action) {
  switch (action.type) {
    case ADD: {
      return state + action.value;
    }

    case SUBTRACT: {
      return state - action.value;
    }

    default: {
      return state;
    }
  }
}
```

## Summary

We now have three different patterns we can choose from to create a reducer.

  - if conditions
  - switch/case
  - object lookup

In all scenarios, the important thing is that the reducer receives **state** and an **action** and can return the next state. The approach that we take to handle the `action.type` can differ based on style preferences.