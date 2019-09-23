import { createAction } from "redux-actions";

export const GET_HOUSES = "GET_HOUSES";
export const getHouses = createAction(GET_HOUSES);

export const GET_HOUSES_SUCCESS = `${GET_HOUSES} SUCCESS`;
export const getHousesSuccess = createAction(GET_HOUSES_SUCCESS);

export const GET_HOUSES_FAIL = `${GET_HOUSES} FAIL`;
export const getHousesFail = createAction(GET_HOUSES_FAIL);

export const GET_SINGLE_HOUSE = "GET_SINGLE_HOUSE";
export const getSingleHouse = createAction(GET_SINGLE_HOUSE);

export const GET_SINGLE_HOUSE_SUCCESS = `${GET_SINGLE_HOUSE} SUCCESS`;
export const getSingleHouseSuccess = createAction(GET_SINGLE_HOUSE_SUCCESS);

export const GET_SINGLE_HOUSE_FAIL = `${GET_SINGLE_HOUSE} FAIL`;
export const getSingleHouseFail = createAction(GET_SINGLE_HOUSE_FAIL);
