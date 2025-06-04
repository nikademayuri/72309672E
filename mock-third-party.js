// Q1-backend/mock-third-party.js

const express = require("express");
const app = express();

app.get("/api/numbers/:id", (req, res) => {
  const id = req.params.id;

  // Send example data for each id
  if (id === "e") {
    return res.json({ numbers: [2, 4, 6, 8, 10] });
  } else if (id === "p") {
    return res.json({ numbers: [2, 3, 5, 7, 11] });
  } else if (id === "f") {
    return res.json({ numbers: [1, 1, 2, 3, 5, 8] });
  } else if (id === "r") {
    return res.json({ numbers: [17, 23, 29, 31] });
  } else {
    return res.status(400).json({ error: "Invalid id" });
  }
});

app.listen(3000, () => {
  console.log("Mock 3rd party server running on port 3000");
});
