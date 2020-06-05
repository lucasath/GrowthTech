const { getUrl } = require("./geturl");

let cached = [];

const getObj = async url => {
  return Promise.all(cached.filter(e => e.url.includes(url)));
};

setInterval(() => {
  cached.map(async e => {
    json = JSON.stringify(await getUrl(e.url));
    e.json = json;
  });
}, process.env.MAX_AGE * 1000);

const getData = async url => {
  let json;
  let result = await getObj(url);

  if (result.map(e => e.url).length === 0) {
    json = JSON.stringify(await getUrl(url));
    cached.push({ url: url, json: json });
    return JSON.parse(json);
  }

  return JSON.parse(result.map(e => e.json));
};

exports.getData = getData;
