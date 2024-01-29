import undoable from 'redux-undo'
const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CARD':
        action.data.id = action.id;
        state.push(action.data)
        return [
          ...state
        ]
      case 'REMOVE_CARD':
        return state.filter(element => element.id !== action.id);
      case 'FREEZE_CARD':
        const newState = state.map((elem) => {
          if (elem.id === action.id) {
             return { ...elem,
                 isActive: false
             };
          }
          return elem;
        });
        return newState;

      case 'UN_FREEZE_CARD':
        const newState2 = state.map((elem) => {
          if (elem.id === action.id) {
             return { ...elem,
                 isActive: true
             };
          }
          return elem;
        });
        return newState2;
      default:
        return state
    }
}

const todoApp = undoable(todos)
export default todoApp