import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  user: null,
  isLogin: false,
  error: null,
  alreadyPresent: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      localStorage.removeItem("user");
      return initialState;
    });
  },
  reducers: {
    signIn(state, action) {
      const { email, password, name } = action.payload;
      const storedData = JSON.parse(localStorage.getItem("registeredUser"));

      // if no user registered yet → register
      if (!storedData) {
        localStorage.setItem("registeredUser", JSON.stringify(action.payload));
        localStorage.setItem("user", JSON.stringify(action.payload)); // current session
        state.user = action.payload;
        state.isLogin = true;
        state.error = null;
        state.alreadyPresent = false;
      } else {
        // if user already registered → check if same user
        if (
          storedData.email === email &&
          storedData.name === name &&
          storedData.password === password
        ) {
          state.alreadyPresent = true;
          state.error = "User already registered";
        } else {
          state.error = "Different credentials already registered";
          state.isLogin = false;
        }
      }
    },

    logIn(state, action) {
      const { email, password } = action.payload;
      const storedData = JSON.parse(localStorage.getItem("registeredUser"));

      if (
        storedData &&
        storedData.email === email &&
        storedData.password === password
      ) {
        state.isLogin = true;
        state.user = storedData;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(storedData)); // store current session
      } else {
        state.error = "Invalid email or password";
      }
    },

    loadUserFromStorage(state) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        state.user = storedUser;
        state.isLogin = true;
      }
    },

    removeAlreadyPresent(state) {
      state.alreadyPresent = false;
      state.error = null;
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
