import axios from "axios";
export const createCar = async (
  car_brand,
  car_model,
  car_year,
  car_variant,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/addCar`,
      {
        car_brand,
        car_model,
        car_year,
        car_variant,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
