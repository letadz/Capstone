import axios from "axios";
export const createBooking = async (
  date_book,
  preferred_time,
  service,
  mileAge,
  book_notes,
  car,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/createBook`,
      {
        date_book,
        preferred_time,
        service,
        mileAge,
        book_notes,
        car,
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
