import passport from "passport";
import prisma from "../../prisma/index";
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
    scope: [ 'profile', 'email' ]
},async function verify(accessToken: any, refreshToken: any, profile: any, cb: any) {
        try {
            await prisma.client.user.upsert({
                where: { email: profile.email },
                update: { },
                create: {
                    first_name: profile.given_name,
                    last_name: profile.family_name,
                    email: profile.email,
                    profile_image: profile.picture,
                }
            });
        } catch(error) {
            console.error(error);
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
