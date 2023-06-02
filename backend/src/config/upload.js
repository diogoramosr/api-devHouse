const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, callB) => {
      const extesion = path.extname(file.originalname);
      const name = path.basename(file.originalname, extesion);

      callB(null, `${name}-${Date.now()}${extesion}`);
    },
  }),
};
