var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendfile(__dirname, "../assets/index.html");
    })
};