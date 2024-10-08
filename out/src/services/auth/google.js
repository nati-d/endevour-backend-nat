"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const index_1 = __importDefault(require("../../prisma/index"));
var GoogleStrategy = require('passport-google-oauth2').Strategy;
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email']
}, async function verify(accessToken, refreshToken, profile, cb) {
    try {
        await index_1.default.client.user.upsert({
            where: { email: profile.email },
            update: {},
            create: {
                first_name: profile.given_name,
                last_name: profile.family_name,
                email: profile.email,
                profile_image: profile.picture,
            }
        });
    }
    catch (error) {
        console.error(error);
    }
    return cb(null, profile);
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
