import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  telephone: "",
  role: "",
  id: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.telephone = action.payload.telephone;
      state.role = action.payload.role;
      state.id = action.payload.id;
      console.log(state);
    },
    logout: (state, action) => {
      state.username = "";
      state.email = "";
      state.telephone = "";
      state.role = "";
      state.id = "";
    },
  },
});
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
