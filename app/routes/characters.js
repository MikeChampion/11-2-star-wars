import { Router } from "express";
import { add, index, show } from "../services/index.js";

const router = new Router();

router.get("/characters/:character", (req, res) => {
  res.status(200).json(show(req.params.character));
});

// Whenever we come to '/api/characters'
// ask the service to return all the characters
// by using the imported index function
router.get("/characters", (req, res) => {
  // Send back the '200' status code
  // with all of the characters as JSON
  res.status(200).json(index());
});

router.post("/characters", (req, res) =>
  add(req.body).then(() => {
    res.status(201).json({ message: "Character created" });
  })
);

export default router;
