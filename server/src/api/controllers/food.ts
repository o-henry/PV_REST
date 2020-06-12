import axios from "axios";
import config from "@config/index";

const options = {
  headers: {
    Authoriazation: config.foods.key,
  },
};

const getFood = async () => {
  try {
    const response = await axios.get(`${config.foods.url}`, options);
    return response;
  } catch (err) {
    console.error("error", err);
  }
};

export default getFood;
