import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "YOUR_APİ_KEY",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;
