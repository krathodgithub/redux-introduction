example of why not mutate data inside reducers

function reducer(state = { todos: [] }, action) {

  switch(action.type) {
    case 'ADD_TODO':
      state.todos.push(action.description)
  }
}

let initialState = {}
const action1 = { type: 'ADD_TODO', 'Do the laundry' }
const action2 = { type: 'ADD_TODO', 'Do the dishes' }
const action3 = { type: 'ADD_TODO', 'Walk the dog' }

let state1 = reducer(initialState, action1)
let state2 = reducer(state1, action2)
let state3 = reducer(state2, action3)
