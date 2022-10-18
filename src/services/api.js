import axios from "axios";

export const api = axios.create({
  baseURL: 'https://bestmovies-api.herokuapp.com'
});
