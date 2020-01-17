const { Router } = require("express");

const routes = Router();

routes.post("/devs", (request, response) => {
  return response.json({ message: "funciona" });
});

module.exports = routes;
