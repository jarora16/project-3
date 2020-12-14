const mongoose = require('mongoose');
const User = mongoose.model('user')

module.exports = (app) => {
    app.get('/user', async (req, res) => {
        if (!req.user || !req.user.googleId) {
            res.send(null);
            return;
        }
        const user = await User.findOne({ googleId: req.user.googleId })
        res.send(user);
    });

    app.post('/user/logout', async (req, res) => {
        req.logout();
        res.redirect('/');
    })
};
