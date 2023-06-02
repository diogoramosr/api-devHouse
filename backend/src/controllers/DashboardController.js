const House = require("../models/House");

class DashboardController {
  async show(req, resp) {
    const { user_id } = req.headers;

    const houses = await House.find({ user: user_id });

    return resp.json(houses);
  }
}

module.exports = new DashboardController();
