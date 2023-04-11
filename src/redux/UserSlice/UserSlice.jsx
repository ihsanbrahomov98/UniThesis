import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  telephone: "",
  role: "",
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
      console.log(state);
    },
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
