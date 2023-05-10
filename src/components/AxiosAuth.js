import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("freespeech");
  return axios.create({
    baseURL: "http://localhost:9000",
    headers: {
      Authorization: token,
    },
  });
};
