import axios from "axios";

export const BACK_END_BASE_URL = "http://localhost:8082";
export const ADMIN_URL = "/admins";
export const SITTERS_URL = "/sitters";
export const USERS_URL = "/users";
export const fetchAllItems = async (URL) => {
  const { data } = await axios.get(BACK_END_BASE_URL + URL);
  console.log(BACK_END_BASE_URL + URL);
  return data;
};
