"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 8000;
app.get('/', function (req, res) {
    res.send('Hello from the Server side <3');
});
app.listen(PORT, function () {
    console.log("Server running successfully at http://localhost:" + PORT);
});
