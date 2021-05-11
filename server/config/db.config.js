const mongoose = require("mongoose");

function initializeDB() {
  // Criando a conexão com o nosso banco de dados
  mongoose
    .connect("mongodb://localhost:27017/roomsapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((conn) => {
      console.log(`Sucessfully connected to DB: ${conn.connections[0].name}`);
    })
    .catch((err) =>
      console.error(`Failed to connect to database, details: `, err)
    );
}

module.exports = initializeDB;
