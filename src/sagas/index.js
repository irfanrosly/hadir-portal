import { all, takeLatest } from "redux-saga/effects";

// Saga files
import { searchRepo, searchUser } from "./github";
import { createStudent, getStudent, getStudentAll } from "./student";

// Redux file
import { GithubTypes } from "../redux/github";
import { StudentTypes } from "../redux/student";

import API from "../utils/api";

const api = API.create();

export default function* rootSaga() {
  yield all([
    takeLatest(GithubTypes.SEARCH_REPO, searchRepo, api),
    takeLatest(GithubTypes.SEARCH_USER, searchUser, api),
    takeLatest(StudentTypes.CREATE_STUDENT, createStudent, api),
    takeLatest(StudentTypes.GET_STUDENT, getStudent, api),
    takeLatest(StudentTypes.GET_STUDENT_ALL, getStudentAll, api)
  ]);
}
