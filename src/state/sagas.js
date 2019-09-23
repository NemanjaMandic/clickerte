import { all } from "redux-saga/effects";
import houseSaga from "./house/sagas";

export default function*() {
  yield all([houseSaga()]);
}
