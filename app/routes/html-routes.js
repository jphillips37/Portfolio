var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendfile(__dirname, "../assets/index.html");
    });

    app.get("../automation", function(req, res){
        res.sendfile(__dirname, "");
    });

    app.get("/web", function(req, res){
        res.sendfile(__dirname, "");
    });
};