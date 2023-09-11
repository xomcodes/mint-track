// AXIOS INSTANCE

import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PROCESS_BASE_URL,
});
