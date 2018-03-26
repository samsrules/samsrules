let express=require('express');
let cors=require('cors');
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/uuyy');
let AdminModel=require('./database/Admin');
let fs=require('fs');
var multer = require('multer');
var DIR = './uploads/';
//let ListModel=require('./database/List');

let app=express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login',function(req,res)
{ 
    let em=req.body.email;
    let pa=req.body.pass;
    AdminModel.find({email:em,pass:pa},function(err,data)
       {
          if(err)
          {
            res.json({err:1,user:'Error on connection'});
          }
          else if(data.length==0)
          {
            res.json({err:1,user:'Email or pass is not correct'});
          }
          else
          {
              res.json({err:0,user:'Congrats!!! Succesfully Login.'});
          }
       })
})


app.post('/insert', function(req, res){
    let em=req.body.email;
    let pa=req.body.pass;

  new AdminModel({
    email: em,
    pass: pa       
  }).save(function(err, doc)
  {
     if(err)
     {
       res.json({err:1,user:'Error while data inserting'});
     } 
     else 
     {
       res.json({err:1,user:'Data inserted'});
     }
     
  });

});

app.get("/list",function(req,res)
{
	AdminModel.find({},function(err,data)
		{
			if(err)
			{}
			res.json({'cdata':data});
		})
})

app.get("/deldata/:id",function(req,res)
{
  var id = req.params.id;
     AdminModel.remove({_id:id},function(err,data)
	 {
	   if(err){
		   res.json({err:1,user:'Error While removing user.'});
	   } else {
		   res.json({err:1,user:'User Removed'});
	   }	 
	 })
})



var storage = multer.diskStorage({ 
        destination: function (req, file, cb) {
            cb(null,DIR);
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });
    var upload = multer({ storage: storage}).single('selectFile');

app.post('/uploadImg',function(req,res)
    {
        
         upload(req, res, function (err) 
         {
             fs.mkdir('sumit');
             console.log(req.file)
            let email=req.body.email;
            console.log(email)
            console.log("upload")
        })
   } )
   
   app.get("/updatedata/:id",function(req,res)
{   
  var id = req.params.id;

	AdminModel.find({_id:id},function(err,data)
		{
			if(err)
      {}
     
			res.json({'updateList':data});
		})
})


app.post('/listupdate/:id',function(req,res){
  AdminModel.findByIdAndUpdate(req.params.id, req.body, function(err, data){
    if(err){
    }
    res.json({'user':'Data Updated'});
 });
});


app.listen(7788,function()
{
    console.log('Working');
})
