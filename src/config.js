import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const tokenConfig = {
    tokenExpiresIn: "20d",
    BECKEND_KEY: process.env.BECKEND_KEY,
}