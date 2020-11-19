var fs = require("fs");


fs.readdir(process.argv[2],function(err, files) {
   if (err) {
      return console.error(err);
   }
   
 let  a= files.filter(e=>e.includes(`.${process.argv[3]}`))
 a.forEach( function (file){
   console.log( file );
});
});
