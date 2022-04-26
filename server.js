const express = require("express");
let booksRoute = require('./routes/tareas.routes');

const app = express();


// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




app.get("/", (req, res) => {
  res.json({ message: "CONEXION MYSQL" });
});



require("./routes/tareas.routes.js")(app);



// ASIGNAR PUERTO
const PORT =  8037;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});