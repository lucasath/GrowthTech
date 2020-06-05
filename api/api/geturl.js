const validUrl = require("valid-url");
const fetch = require("node-fetch");

const getUrl = async url => {
  if (checkUrl(url)) {
    let response = await fetch(url, { method: "Get" });
    let data = await response.json();
    return data;
  } else {
    return "Url Invalida.";
  }
};

const checkUrl = url => {
  return validUrl.isUri(url);
};

exports.getUrl = getUrl;
