const axios = require("axios");

module.exports = axios.create({
  baseURL: "http://localhost:8081/VodafoneIE_Web"
});
