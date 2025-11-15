import dotenv from "dotenv";
dotenv.config();

const user1 = process.env.USER1_USERNAME;
const pass1 = process.env.USER1_PASSWORD;
const adminuser = process.env.ADMIN_USERNAME;
const adminpass = process.env.ADMIN_PASSWORD;

const config = {
  challenge: true, // Set to true if you want to enable password protection.
  users: {
    // You can add multiple users by doing username: 'password'.
    [user1]:pass1,
    [adminuser]:adminpass
  },
};

export default config;
