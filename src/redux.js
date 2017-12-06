/*

Actions Examples:
const action = { type: 'ADD_TODO', note: 'Do the laundry' }
const action = { type: 'REMOVE_TODO' }
*/

//Action Generators
function generateAddToDoAction(id, note) {
  return {
    type: 'ADD_TODO',
    note: note,
    id: id
  }
}

function generateToggleAction(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}


// Reducer
export const reducer = function(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, { note: action.note, id: action.id, completed: false } ]
    case 'MARK_DONE':
      return state.map((todo) => {
        if(todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo  
        }
      })
    default:
      return state
  }
}

// Pure function - One that has the same result after the same input

// i.e. NOT pure
function notPureReduceHunger(person) {
  person.hunger--
}

var person = {
  hunger: 10
}

notPure(person) // method in 
notPure(person) // 

// person.hunger -> 8

// i.e. pure
function pureReduceHunger(person) {
  const newPerson = Object.create({ ...person })
  newPerson.hunger--
  return person
}

var person = {
  hunger: 10
}
pureReduceHunger(person) // { hunger: 9 }
pureReduceHunger(person) // { hunger: 9 }

/*
  Actions, reducers, action generators, store, state
*/
