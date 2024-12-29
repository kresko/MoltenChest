const LocalStrategy = require("passport-local").Strategy;
const db = require("./db/queryHandler");

async function passportConfig(passport) {
    // Configure LocalStrategy
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            try {
                const user = await db.getUsersByUsername(username);

                if (!user) {
                    return done(null, false, { message: "Incorrect username" });
                }
                if (user.password !== password) {
                    return done(null, false, { message: "Incorrect password" });
                }
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        })
    );

    // Configure serializeUser
    passport.serializeUser((user, done) => {
        done(null, user.id_user);
    });

    // Configure deserializeUser
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await db.getUsersById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
}

module.exports = passportConfig;