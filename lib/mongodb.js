import mongoose from "mongoose";

const connection = {}; /* creating connection object*/

const dbConnect = async () => {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      connection.isConnected = db.connections[0].readyState;
    });
};

export default dbConnect;
