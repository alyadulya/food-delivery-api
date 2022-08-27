const mongoose = require('mongoose');
const {dbHost, dbPass, dbName, dbPort, dbUser} = require('../app/config');

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
const db = mongoose.connection;

module.exports = db;

// const mongoose = require('mongoose');
// const {dbHost} = require('../app/config');
// console.log(dbHost)
// try {
//     // Connect to the MongoDB cluster
//     mongoose.connect(
//       dbHost,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       () => console.log(" Mongoose is connected"),
//     );
//   } catch (e) {
//     console.log("could not connect");
// }
// // mongoose.connect(dbHost);
// const db = mongoose.connection;

// module.exports = db;