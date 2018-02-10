var express=require('express');
var app=express();
var mongoose=require('mongoose');
var config=require('./config/database');

mongoose.Promise=global.Promise;

mongoose.connect(config.uri,function(err){
    if(err){
        console.log(err);
    }
    else{
        
        console.log("Connected Successfully!! " +config.db);
    }
});


var port=3000;
app.use(express.static(__dirname +'/client/dist/'))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname +'/client/dist/index.html'));
});


app.listen(port,function(err){
    if(err){
        console.log(err);

    }
    else{
        console.log("Connected to "+port);
    }

});
