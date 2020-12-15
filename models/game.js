const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    _id: { type: String },
    name: { type: String },
    platforms: { type: Array },
    rating: { type: String },
    background_image: { type: String },
    esrb_rating: { type: String }
});

const games = mongoose.model("games", gameSchema);

module.exports = games;