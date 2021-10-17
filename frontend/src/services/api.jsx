import axios from "axios";

const URL = "http://localhost:3002/users"

export const api = axios.create({
  baseURL: URL
})