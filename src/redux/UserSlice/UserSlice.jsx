import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  telephone: "",
  role: "",
  id: "",
  takenDates: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("action.payload", action.payload);
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.telephone = action.payload.telephone;
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.takenDates = action.payload.takenDates;
      console.log(state);
    },
    setTakenDate: (state, action) => {
      state.takenDates = action.payload.takenDates;
    },
    logout: (state, action) => {
      state.username = "";
      state.email = "";
      state.telephone = "";
      state.role = "";
      state.id = "";
      state.takenDates = "";
    },
  },
});
export const { setUser, logout, setTakenDate } = userSlice.actions;

export default userSlice.reducer;
