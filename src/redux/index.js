import { combineReducers } from "redux";
import { github } from "./github";
import { student } from "./student";

export default combineReducers({
  github,
  student
});
