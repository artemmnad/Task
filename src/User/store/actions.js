export const FETCH_USERS_BEGIN   = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});


export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const deleteUser = id => ({
  type: 'DELETE_USER',
  id
});

export const fetchUsers = fetchedUsers => ({
  type: 'FETCH_USERS',
  fetchedUsers
});