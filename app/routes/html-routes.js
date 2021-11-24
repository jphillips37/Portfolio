var path = require("path");

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname, 'index.html');
        //console.log(__dirname);
    });

    app.get('/desktop', function(req, res){
        res.sendFile('desktop.html', {root: path.join(__dirname, '../public')});
    });

    app.get('/web', function(req, res){
        res.sendFile('web.html', {root: path.join(__dirname, '../public')});
    });
};