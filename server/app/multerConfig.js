const multer = require("multer"); // Middleware pour gérér le téléchargement de fichier
const path = require("path"); // Module pour gérer les chemins

const storage = multer.diskStorage({
  // Définit la configuration pour stocker les fichiers téléchargés
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../../client/public/img")); // Spécifie le répertoire où les fichiers seront stockés
  },

  // Spécifie le nom du fichier enregistré.
  // Un suffixe unique est généré en utilisant la date actuelle et un nombre aléatoire pour éviter les conflits de noms.
  // L'extension du fichier original est conservée.
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = path.extname(file.originalname);
    cb(null, `image-${uniqueSuffix}${extension}`);
  },
});

const upload = multer({ storage }); // Définition de la constant upload comme middleware

module.exports = upload;
