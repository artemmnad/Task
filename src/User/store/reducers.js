const initialState = { users: [] };

const reducers = (state = initialState, action) => {
  const { users } = state;

  switch (action.type) {
    case 'FETCH_USERS_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };

    case 'FETCH_USERS_SUCCESS':
      const fetchedUsers = action.payload.users;

      for(const u of fetchedUsers) {
        if (typeof(u.registered) === 'string') {
          // remove spaces to make the string a valid iso 8601 date
          const dateStr = u.registered.replace(/\s/g, '');
          u.registered = new Date(dateStr)
        }
      }

      return {
        ...state,
        loading: false,
        users: fetchedUsers
      };

    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case 'ADD_USER':
      return {
        ...state,
        users: [
          ...users,
          action.user
        ]
      };

    case 'DELETE_USER':
      return {
        ...state,
        users: users.filter(u => u.id !== action.id)
      };

    default:
      return state
  }
};

export default reducers