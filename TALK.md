# redux-introduction

## Introduction to Redux

### Welcome

Welcome to the introduction to Redux. 


## Objective 

We are going to talk about the motivation behind Redux and go over an example of a To-Do list to see how to use it.

### Why Redux?

As the requirements of single page applications have become increasingly complicated, our code must manage more state than ever before. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server.
UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, paginations, controls and so on.

In summary, managing state has become increasingly complex over time and what redux does is that it makes state mutations predictable by imposing restrictions on how and when updates happen.

### Objective of this session

* Go over the core concepts of the Redux library

### Three principles

* Single source of truth - state, store

```
console.log(store.getState())
/*
prints

{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

*/
```

* State is read only
The only way to change the state is to emit an action

* Changes are made with pure functions
To specify how the state tree is transformed by actions, you write pure reducers

* Actions: Plain javacript objects that describe what happened,
A few examples

{ type: 'ADD_TODO', text: 'Eat brownie' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }


