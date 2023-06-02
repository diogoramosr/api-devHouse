const Reserve = require("../models/Reserva");
const House = require("../models/House");
const User = require("../models/User");

class ReservaController {
  async index(req, resp) {
    const { user_id } = req.headers;
    const reserves = await Reserve.find({ user: user_id }).populate("house");

    return resp.json(reserves);
  }

  async store(req, resp) {
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const house = await House.findById(house_id);
    if (!house) {
      return resp.status(400).json({ error: "Essa casa não existe." });
    }

    if (house !== true) {
      return resp.status(400).json({ error: "Solicitação indisponível." });
    }

    const user = await User.findById(user_id);
    if (String(user._id) === String(house.user)) {
      return resp.status(401).json({ error: "Reserva não permitida." });
    }

    const reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });

    await reserve.populate(["house", "user"]);

    return resp.json(reserve);
  }

  async destroy(req, resp) {
    const { reserve_id } = req.body;
    await Reserve.findByIdAndDelete({ _id: reserve_id });
    return resp.json();
  }
}

module.exports = new ReservaController();
