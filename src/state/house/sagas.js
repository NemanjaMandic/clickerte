import { all, takeLatest, takeEvery, put } from "redux-saga/effects";
import * as actions from "./actions";
import { getHouses } from "../../services/api";

export function* getHouses$() {
  try {
    const { data } = yield getHouses();
    console.log("RESPONSE", data);
    yield put(actions.getHousesSuccess(data));
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

export default function*() {
  yield all([takeEvery(actions.getHouses, getHouses$)]);
}
