const INITIAL_STATE: IInialState = {
  users: [],
  fail: false,
  loading: false,
  items: null,
  user: "",
};

interface IInialState {
  users: any;
  fail: boolean;
  loading: boolean;
  items: any;
  user: string;
}

export default function githubReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "GET_GITHUB_SUCCESS":
      return {
        ...INITIAL_STATE,
        users: action.payload.users,
        user: action.payload.user,
      };

    case "GET_GITHUB_FAIL":
      return {
        ...INITIAL_STATE,
        fail: true,
      };

    default:
      return state;
  }
}

export function githubAction(user: any) {
  return async function (dispatch: any) {
    try {
      const url = "https://api.github.com/search/users?q=";
      const response = await fetch(url + user);
      const jsonUsers = await response.json();
      dispatch({
        type: "GET_GITHUB_SUCCESS",
        payload: {
          users: jsonUsers,
          user,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_GITHUB_FAIL" });
    }
  };
}
