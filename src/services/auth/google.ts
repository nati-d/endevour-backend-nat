import passport from "passport";
import prisma from "../../prisma/index";
var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "auth/google/callback",
      scope: ["profile", "email"],
    },
    async function verify(
      accessToken: any,
      refreshToken: any,
      profile: any,
      cb: any
    ) {
      let user = await prisma.client.user_credential.upsert({
        where: {
          credential_id_provider: {
            credential_id: profile.id,
            provider: profile.provider,
          }
        },
        update: { },
        create: {
          credential_id: profile.id,
          provider: profile.provider
        }
      });

      return cb(null, profile);
    }
  )
);

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  done(null, user);
});
