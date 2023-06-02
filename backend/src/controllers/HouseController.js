const House = require("../models/House");
const User = require("../models/User");
const Yup = require("yup");

class HouseController {
  async index(req, resp) {
    const { status } = req.query;
    const houses = await House.find({ status });

    return resp.json(houses);
  }

  async store(req, resp) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });

    const { filename } = req.file;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    if (!(await schema.isValid(req.body))) {
      return resp.status(400).json({ error: "Falha na validação" });
    }

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status: status,
    });

    return resp.json(house);
  }

  async update(req, resp) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });

    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    if (!(await schema.isValid(req.body))) {
      return resp.status(400).json({ error: "Falha na validação" });
    }

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (String(user._id) !== String(houses.user)) {
      return resp.status(401).json({ error: "Não autorizado" });
    }

    await House.updateOne(
      { _id: house_id },
      {
        user: user_id,
        thumbnail: filename,
        description,
        price,
        location,
        status: status,
      }
    );

    return resp.send();
  }

  async destroy(req, resp) {
    const { house_id } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (String(user._id) !== String(houses.user)) {
      return resp.status(401).json({ error: "Não autorizado" });
    }

    await House.findByIdAndDelete({
      _id: house_id,
    });

    return resp.json({ message: "Excluida com sucesso" });
  }
}

module.exports = new HouseController();
