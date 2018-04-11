import Redux from 'redux';

const reducer = (state = [], action) {
  switch(action.type) {

    case 'SEARCH_REPO': 
      return [
        ...state
      ]
    default:
      state
  }
}

export default reducer;