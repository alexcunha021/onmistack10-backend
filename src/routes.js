const { Router } = require("express");
const DevController = require("./controllers/DevControllers");
const SearchController = require("./controllers/SearchController");
const Dev = require("./models/Dev");
const routes = Router();
routes.get("/search", SearchController.index);
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

module.exports = routes;
