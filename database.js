const mongoose = require('mongoose');
exports.connect = connect;

function connect() {
  return new Promise((resolve, reject) => {
    try {
      mongoose.connect(
        process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, () => {
        console.log("Database connected");
          resolve({ connected: true });
      });
    } catch (error) {
      resolve({ connected: false });
    }
  });
}
