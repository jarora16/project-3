const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('user')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
    async (accessToken, refreshToken, profile, cb) => {
        if (!profile.id) {
            return cb(null, false, { message: 'Invalid user' })
        }
        const userRecord = await User.findOne({ googleId: profile.id });
        if (!userRecord) {
            await User.create({ googleId: profile.id, displayName: profile.displayName, email: profile.emails[0].value });
        }
        cb(null, { id: profile.id });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findOne({ googleId: id }, function (err, user) {
        done(err, user);
    });
});
