"use strict";
const cloudbase = require("@cloudbase/node-sdk");
const axios = require("axios");
const app = cloudbase.init({
  env: cloudbase.SYMBOL_CURRENT_ENV,
});
const db = app.database();
exports.main = async (event, context) => {
  const { body } = event;

  const options = {
    headers: {
      "User-Agent": "adroit",
      "X-Auth-Token": "DonVFLb5eO0xgLjGtbYBdBRytNg8siVm2ydW6bhS",
    },
    method: "GET",
    url: "https://www.yuque.com/api/v2/repos/adroit/dyuot5/toc",
  };

  const req = await axios(options);

  return req;
};
