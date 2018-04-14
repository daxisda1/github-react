export const SEARCH_GITHUB = "SEARCH_GITHUB";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const SET_USERNAME = "SET_USERNAME";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_REPOS = "UPDATE_REPOS";

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username: username
  };
}
export function itemsHasErrored(bool) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  };
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function reposFetchDataSuccess(repos) {
  return {
    type: "REPOS_FETCH_DATA_SUCCESS",
    repos
  };
}
export function reposFetchData(url) {
  return dispatch => {
    // dispatch(itemsIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        // dispatch(itemsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(repos => dispatch(reposFetchDataSuccess(repos)));
    // .catch(() => dispatch(itemsHasErrored(true)));
  };
}

// Search results
export function resultsFetchDataSuccess(results) {
  return {
    type: "RESULTS_FETCH_DATA_SUCCESS",
    results
  };
}
export function resultsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(results => dispatch(resultsFetchDataSuccess(results)));
    // .catch(() => dispatch(itemsHasErrored(true)));
  };
}

// Profile actions
export function profileHasErrored(bool) {
  return {
    type: "PROFILE_HAS_ERRORED",
    hasErrored: bool
  };
}

export function profileIsLoading(bool) {
  return {
    type: "PROFILE_IS_LOADING",
    isLoading: bool
  };
}

export function profileFetchDataSuccess(profile) {
  return {
    type: "PROFILE_FETCH_DATA_SUCCESS",
    profile
  };
}

export function profileFetchData(url) {
  return dispatch => {
    dispatch(profileIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(profileIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(profile => dispatch(profileFetchDataSuccess(profile)))
      .catch(() => dispatch(profileHasErrored(true)));
  };
}
