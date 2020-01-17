const Dev = require("../models/Dev");
const parseStringAsArray = require("../util/parseStringAsArray");
module.exports = {
  async index(request, response) {
    // Buscar todos devs num raio 10km
    //filtrar por tecnologia
    const { latitude, longitude, techs } = request.query;
    const techsArrray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArrray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });
    return response.json({ devs });
  }
};
