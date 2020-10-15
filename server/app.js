const fs = require("fs");
const jwt = require("jsonwebtoken");
const { certificate, token } = require("./certificate.json");

// const buff = Buffer.from(certificate, "utf-8");
const buffer = fs.readFileSync("pam.pem");
// console.log(buffer);
// console.log(buff);

console.log(jwt.verify(token, buffer));
// console.log(jwt.verify(token, buff, { algorithms: ["RS256"] }));

// console.log(buff.toString("base64"));
// console.log(token);

// var buffer = fs.readFileSync(filename);
