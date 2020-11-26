const GITHUBACTION = {
  SUCCESS: "GET_GITHUB_SUCCESS",
  LOADING: "GET_GITHUB_LOADING",
  FAIL: "GET_GITHUB_FAIL",
};

const INITIAL_STATE: IInialState = {
  users: [],
  fail: false,
  loading: false,
  user: "",
  totalCount: 0,
};

interface IInialState {
  users: any;
  fail: boolean;
  loading: boolean;
  user: string;
  totalCount: number;
}

export default function githubReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case GITHUBACTION.SUCCESS:
      return {
        ...INITIAL_STATE,
        users: action.payload.users,
        user: action.payload.user,
        totalCount: action.payload.totalCount,
      };

    case GITHUBACTION.LOADING:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case GITHUBACTION.FAIL:
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
    dispatch({ type: GITHUBACTION.LOADING });

    try {
      const url = "https://api.github.com/search/users?q=";
      const response = await fetch(url + user);
      const jsonUsers = await response.json();
      dispatch({
        type: GITHUBACTION.SUCCESS,
        payload: {
          users: jsonUsers.items,
          totalCount: jsonUsers.total_count,
          user,
        },
      });
    } catch (error) {
      dispatch({ type: GITHUBACTION.FAIL });
    }
  };
}
