interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = { isLoggedIn: false };

export const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
