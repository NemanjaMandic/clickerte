import { get, post } from "./network";

const BASE_URL = `http://te-testapp.azurewebsites.net/api/House`;

const headers = {
  "content-type": "application/problem+json; charset=utf-8 "
};

export const getHouses = async () => {
  try {
    const response = await get(BASE_URL);
    return response;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const getSingleHouse = async id => {
  try {
    const response = await get(`${BASE_URL}/${id}`);
    return response;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const sendHouseClicked = async data => {
  console.log("AAAAAAAAAAAAAAA", data);
  try {
    const response = await post(BASE_URL, data, { headers: headers });
    return response;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
