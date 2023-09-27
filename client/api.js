const axios = require("axios");

const url = "http://localhost:3000/issues/";

async function getIssue(id) {
  return axios.get(url + id, { headers: { Accept: "application/json" } });
}

async function createIssue(title, description) {
  return axios.post(url, {
    headers: { Accept: "application/json" },
    title: title,
    description: description,
  });
}

async function updateIssue(id, title, description) {
  return axios.put(url + id, {
    headers: { Accept: "application/json" },
    title: title,
    description: description,
  });
}

async function deleteIssue(id) {
  return axios.delete(url + id, { headers: { Accept: "application/json" } });
}

module.exports = { createIssue, getIssue, updateIssue, deleteIssue };
