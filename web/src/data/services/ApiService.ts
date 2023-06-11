import axios from "axios";

const url = "https://ediaristas.devcontent.com.br/public";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "aplication/json",
  },
});
