const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    _id: { type: String },
    title: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String }
});

const games = mongoose.model("games", gameSchema);

module.exports = games;