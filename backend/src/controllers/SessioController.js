const User = require("../models/User");
const Yup = require("yup");

class SessionController {
  async store(req, resp) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;

    if (!(await schema.isValid(req.body))) {
      return resp.status(400).json({ error: "Falha na validação" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }
    return resp.json(user);
  }
}

module.exports = new SessionController();
