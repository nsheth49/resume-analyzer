const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Contact Form Submission:");
  console.log({ name, email, message });

  res.json({ success: true, message: "Message received!" });
});