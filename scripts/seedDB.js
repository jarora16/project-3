const mongoose = require("mongoose");
const db = require("../models");
const keys = require("../config/keys");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    keys.mongoURI
);

const gameSeed =
    [{
        authors: ["Valve"],
        description: "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.",
        image: "https://i.pinimg.com/originals/73/37/ee/7337ee3f05f2c05bbfcd8f7ceffe32dd.jpg",
        link: "https://store.steampowered.com/app/400/Portal/",
        title: "Portal"
    }]


db.Game
    .remove({})
    .then(() => db.Game.collection.insertMany(gameSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });