// it will read data from a file and show it on the console
// var fs = require('fs');
// var readMe = fs.readFileSync('readMe.txt','utf8');
// console.log(readMe);

// writes a new file called write.txt
var fs = require('fs');

 fs.readFile('readMe.txt','utf8', function(err, data){;
// it will write the content from the readMe file to the writeMe file
console.log(data);
});
 console.log('test');



//use fileSync to run sychronously
