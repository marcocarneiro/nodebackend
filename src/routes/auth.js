import express from "express";
import passport from "passport";
import authPassport from "../auth.js";

const router = express.Router();

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redireciona o usuário para uma página com o token
    res.redirect(`/api/auth/success?token=${req.user.token}`);
  });

router.get('/api/auth/success', (req, res) => {
  const token = req.query.token;
  res.json({ token });
});

export default router;