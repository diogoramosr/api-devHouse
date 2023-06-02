const { Schema, model } = require("mongoose");


const opts = { toJSON: { virtuals: true } };
const HouseSchema = new Schema(
  {
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  opts
);

// CAMPO VIRTUAL, NÃO SERÁ CRIADO DIRETAMENTE NO BANCO MAS CASO TER UMA BUSCA, ELE IR PROCURAR/CRIAR
HouseSchema.virtual("thumbnail_url").get(function () {
  return `http://localhost:3000/files/${this.thumbnail}`;
});

const house = model("House", HouseSchema);

module.exports = house;
