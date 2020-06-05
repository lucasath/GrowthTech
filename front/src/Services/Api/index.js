import axios from "axios";

const Api = axios.create({
  //crossdomain: true,
    baseURL: process.env.REACT_APP_URL_BASE+":"+process.env.REACT_APP_API_PORT||"80",
    headers: {
      "Content-Type": "application/json",
    },
  });

Api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default Api;