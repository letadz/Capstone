export function carsReducer(state, action) {
  switch (action.type) {
    case "CARS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "CARS_SUCCESS":
      return {
        ...state,
        loading: false,
        cars: action.payload,
        error: "",
      };
    case "CARS_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function profileReducer(state, action) {
  switch (action.type) {
    case "PROFILE_REQUEST":
      return { ...state, loading: true, error: "" };
    case "PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        profile: action.payload,
        error: "",
      };
    case "PROFILE_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function historyReducer(state, action) {
  switch (action.type) {
    case "BOOKS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "BOOKS_SUCCESS":
      return {
        ...state,
        loading: false,
        history: action.payload,
        error: "",
      };
    case "BOOKS_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
