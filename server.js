const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "0oqr4z8NcWOvt03whTcOvmkIn1BDk6F0VIUaVP5Lr8WJ";
const PROJECT_ID = "8e646ba0-1d87-42d7-9623-88f10b1419a8";
const DISCOVERY_URL = "https://api.au-syd.discovery.watson.cloud.ibm.com/instances/7b2f91df-c322-4b8c-8461-5312d7f43fde";

app.post("/search", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const response = await fetch(DISCOVERY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from("apikey:" + API_KEY).toString("base64")
      },
      body: JSON.stringify({ natural_language_query: query, count: 5 })
    });

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch from IBM Discovery" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
