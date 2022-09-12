// Je crée une constante , pour "require" , pour importer la totalité du module demandée
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

// Je crée une constante pour relier la constante au fichier mongoose 
const userSchema = mongoose.Schema({

    // J'insère le mail et le mot de passe dans la string
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Je relie ma constante , avec le plugin 
userSchema.plugin(uniqueValidator);

// J'exporte le module , au fichier userInfos
module.exports = mongoose.model("User", userSchema);