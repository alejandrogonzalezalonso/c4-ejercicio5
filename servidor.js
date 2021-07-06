require ("dotenv").config();
const fetch = require("node-fetch");
const express = require("express");

const { getLineasMetro } = require("./api");


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





