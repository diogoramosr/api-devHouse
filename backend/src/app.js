const express = require("express");
const db = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

class App {
  constructor() {
    // referenciando a propria classe
    this.server = express();

    // Config para conectar ao banco
    db.connect(
      "seu banco de dados aqui",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());

    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
