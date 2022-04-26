const tarea = require("..controllers/tareas.controllers.js");
const router = require("express").Router();

router.get("/", tarea.findAll);


module.exports = router;