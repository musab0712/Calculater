const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
const port = 3000;

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res){
    // console.log(req.body);
    var num1 = Number( req.body.num1 );
    var num2 = Number ( req.body.num2 );
    var result = num1 + num2;
    res.send("The result of the Addition of " + num1 + " and " + num2 + " : " + result );
});

app.get("/BMIcalculater", function (req, res) {
    res.sendFile(__dirname + "/BMIcalculater.html");
});
app.post("/BMIcalculater", function (req, res){
    // console.log(req);
    var hight = parseFloat(req.body.hight);
    var weight = parseFloat(req.body.weight);
    var bmi = weight/(hight * hight);
    res.send("Your BMI is " + bmi);
});

app.listen(port, function(){
    console.log("server is runnig on port " + port);
});