require ("dotenv").config();
const fetch = require("node-fetch");
const express = require("express");


const appKey = process.env.APP_KEY;
const appId = process.env.APP_ID;
const appURL = process.env.API_URL;

const URL = `${appURL}?app_key=appKey`;

const app = express();


const server = app.listen(4000, () => {
  console.log("Servidor abierto");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log("No se ha podido levantar el servidor");
  }
});

const getLineas = async()=>{
  const resp = await fetch();
  const { features } = await resp.json();
  return features;
}





