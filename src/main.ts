import express from "express";
import database from "./database";

const app = express();
const port = 8001;

//@ts-ignore
app.get("/characters", (_, res) => {
  res.status(200).json(database.characters);
});

//@ts-ignore
app.get("/character/:id", (req, res) => {
  const { id } = req.params;

  const characterFound = database.characters.find(
    (character) => character.id === id
  );

  if (characterFound) {
    res.status(200).json(characterFound);
  } else {
    res.status(404).json(null);
  }
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
