import passport from "passport";
import prisma from "../../prisma/index";
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "auth/google/callback",
    scope: [ 'profile', 'email' ]
},async function verify(accessToken: any, refreshToken: any, profile: any, cb: any) {

        let user = await prisma.client.user_credential.findFirst({
            where: {
                credential_id: profile.id,
                provider: profile.provider,
            }
        });

        if (!user) {
            let newUser = await prisma.client.user.create({
                data: {
                    first_name: profile.given_name,
                    last_name: profile.family_name,
                    email: profile.email,
                    profile_image: profile.picture,
                }
            })

            if (newUser.id)
            await prisma.client.user_credential.create({
                data: {
                    user_id: newUser.id,
                    credential_id: profile.id,
                    provider: profile.provider
                }
            })
        }

        return cb(null, profile)
    }
));

passport.serializeUser((user: any, done: any) => {
    done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
    done(null, user);
});
