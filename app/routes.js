module.exports = function(app) {

    app.get("/pages/:name",function(req,res){
        res.render("pages/"+ req.params.name);
    });

    app.get("/",function(req,res){
        res.sendFile('index.html', { root: __dirname });

        // res.render(__dirname + "/index.html");
    });

}
