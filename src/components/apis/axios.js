import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
// const baseUrl = "https://server.thrida.com/api";

export const ThridaApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
