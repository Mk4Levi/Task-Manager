const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then((res) => console.log("Connected to MongoDB Atlas successfully"))
  .catch((err) => console.log("Error connecting to MongoDB"));
