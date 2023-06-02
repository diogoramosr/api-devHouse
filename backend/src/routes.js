const { Router } = require("express");
const routes = new Router();

// middleware que vai interceptar o upload e salvar o arquivo em uma pasta do disco. Para um upload básico,
// a gente só precisa informar o destino onde os arquivos serão salvos: { dest: 'uploads/' } .
const multer = require("multer");

const SessionController = require("./controllers/SessioController");
const HouseController = require("./controllers/HouseController");
const uploadConfig = require("./config/upload");
const DashboardController = require("./controllers/DashboardController");
const ReservaController = require("./controllers/ReserveController");

const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.post("/houses", upload.single("thumbnail"), HouseController.store);
routes.get("/houses", HouseController.index);
routes.put(
  "/houses/:house_id",
  upload.single("thumbnail"),
  HouseController.update
);
routes.delete("/houses", HouseController.destroy);

routes.get("/dashboard", DashboardController.show);

routes.post("/houses/:house_id/reserve", ReservaController.store);

routes.get('/reserves', ReservaController.index)
routes.delete('/reserves/cancel', ReservaController.destroy)

module.exports = routes;
