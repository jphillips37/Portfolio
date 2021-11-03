var path = require("path");

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname, 'index.html');
        //res.send("test");
        console.log(__dirname);
    });

    app.get('/automation', function(req, res){
        res.sendFile('automation.html', {root: path.join(__dirname, '../public')});
    });

    app.get('/web', function(req, res){
        res.sendFile('web.html', {root: path.join(__dirname, '../public')});
    });
};