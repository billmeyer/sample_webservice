// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init();
tracer.init({
    enabled: true,
    debug: false,
    analytics: true
});

let express = require("express");

let app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    res.json("Entrypoint to the Application");
});

app.get("/api/apm", (req, res, next) => {
    res.json("Getting APM Started");
});

app.get("/api/trace", (req, res, next) => {
    res.json("Posting Traces");
});
