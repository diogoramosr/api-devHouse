const { Schema, model } = require("mongoose");

const ReservaSchema = new Schema({
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: "House",
  },
});

const reserva = model("Reserve", ReservaSchema);

module.exports = reserva;
