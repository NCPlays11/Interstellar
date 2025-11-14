require('dotenv').config();

// const user1 = process.env.MICAH_USERNAME;
// const pass1 = process.env.MICAH_PASSWORD;
const adminuser = process.env.ADMINUSERNAME;
const adminpass = process.env.ADMINPASSWORD;

const config = {
  challenge: true, // Set to true if you want to enable password protection.
  users: {
    // You can add multiple users by doing username: 'password'.
    // user1:pass1,
    adminuser:adminpass
  },
};

export default config;
