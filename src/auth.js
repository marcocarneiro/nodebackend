import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // Aqui você pode salvar o perfil do usuário no banco de dados, se necessário
    /* const user = {
      id: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName
    }; */

    // Gera um token JWT para o usuário
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });

    return done(null, { user, token });
  }
));

export default passport;