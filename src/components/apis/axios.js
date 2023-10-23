import axios from "axios";

// const baseUrl = "http://127.0.0.1:8000/api";
const baseUrl = "https://server.thrida.com/api";

// export const imageUrl = "http://127.0.0.1:8000/storage/";
export const imageUrl = "https://server.thrida.com/storage/";

export const ThridaApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
