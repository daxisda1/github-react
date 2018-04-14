import * as actionTypes from "../actions";

const initialState = {
  search: "",
  profile: {},
  repos: [],
  results: {
    items: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_GITHUB:
      return {
        ...state,
        search: action.value
      };
    case "RESULTS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        results: action.results
      };
    case actionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.UPDATE_REPOS:
      return {
        ...state,
        repos: action.payload
      };
    case "ITEMS_HAS_ERRORED":
      return {
        ...state,
        hasErrored: action.hasErrored
      };
    case "ITEMS_IS_LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      };
    case "ITEMS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        items: action.items
      };
    case "PROFILE_HAS_ERRORED":
      return {
        ...state,
        hasErrored: action.hasErrored
      };
    case "PROFILE_IS_LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      };
    case "PROFILE_FETCH_DATA_SUCCESS":
      return {
        ...state,
        profile: action.profile
      };
    case "REPOS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        repos: action.repos
      };
    default:
      return state;
  }
};

export default reducer;
