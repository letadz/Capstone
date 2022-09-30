import axios from "axios";
export const deleteHistory = async (historyId, token) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/deleteHistory/${historyId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
