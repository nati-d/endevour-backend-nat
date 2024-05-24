"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const index_1 = __importDefault(require("../../prisma/index"));
var GoogleStrategy = require("passport-google-oauth2").Strategy;
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "auth/google/callback",
    scope: ["profile", "email"],
}, async function verify(accessToken, refreshToken, profile, cb) {
    let user = await index_1.default.client.user_credential.upsert({
        where: {
            credential_id_provider: {
                credential_id: profile.id,
                provider: profile.provider,
            }
        },
        update: {},
        create: {
            credential_id: profile.id,
            provider: profile.provider
        }
    });
    return cb(null, profile);
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
