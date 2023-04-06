import axios from "axios";

export const BACK_END_BASE_URL = "http://localhost:8082";
export const FRONT_END_BASE_URL = "http://localhost:3000";
export const ADMIN_URL = "/admins";
export const SITTERS_URL = "/sitters";
export const FIND_ONE_SITTER = "/findone/";
export const BOOK_ONE_SITTER = "/book/";
export const USERS_URL = "/users";
export const SEARCH_URL = "/search";
export const ACCEPT = "/accept/";
export const DECLINE = "/decline/";
export const HISTORY = "/history/";
export const fetchAllItems = async (URL) => {
  const { data } = await axios.get(BACK_END_BASE_URL + URL);
  console.log(BACK_END_BASE_URL + URL);
  return data;
};
