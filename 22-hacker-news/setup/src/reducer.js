import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    case SET_STORIES:
      return {
        ...state,
        data: action.payload.data,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };
    case REMOVE_STORY:
      return {
        ...state,
        data: state.data.filter((story) => {
          return story.objectID !== action.payload;
        }),
      };
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage === state.nbPages) {
          nextPage = 0;
        }
        return {
          ...state,
          page: nextPage,
        };
      } else {
        let prevPage = state.page - 1;
        if (prevPage === -1) {
          prevPage = state.nbPages - 1;
        }
        return {
          ...state,
          page: prevPage,
        };
      }
    default:
      throw new Error(`no matching ${action.type} action!`);
  }
};
export default reducer;
