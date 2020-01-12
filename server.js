const express = require("express");
const app = express();
app.use("/", express.static(__dirname + "/build"));
app.use("/", function(req, resp){
    resp.redirect("/");
});
app.listen(3000);
