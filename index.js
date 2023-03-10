const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middle_wares

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://taiyebnirjhor:Wu7sdqL69peuwYci@cluster0.kn8ojxn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

/***********************************/
(async function () {
  try {
    const menu = client.db("todos").collection("allTasks");

    /*****************************[read]***********************************/

    /*************************************/

    app.get("/", async (req, res) => {
      res.send("hello");
    });
    /*************************************/
  } finally {
    console.log("done");
  }
})().catch((err) => console.error(err));
/***********************************/

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
