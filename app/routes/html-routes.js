var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(__dirname, "index.html");
        //res.send("test");
        console.log(__dirname);
    });

    app.get("/automation", function(req, res){
        console.log(__dirname);
        res.sendFile(__dirname, "../public/automation.html");
    });

    app.get("/web", function(req, res){
        res.sendFile(__dirname, "");
    });
};