const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt,
  keys = require("../config/keys"),
  mongoose = require("mongoose"),
  User = mongoose.model("users"),

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.sekret,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      try {
        const user = await User.findById({ id: jwt_payload.id }).select(
          "email id"
        );
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
};
