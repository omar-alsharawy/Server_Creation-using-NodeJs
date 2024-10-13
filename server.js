const http = require('http'); // HTTP Module
const date = require('./CurrentDate')
http.createServer(
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
                        // res.end('Hello World');
                        // res.end( `time is -- ${date.DateFunction()}` );
        const CurrentDate= date.DateFunction() 
        res.end( ` Time Now is = ${CurrentDate} `)

    }).listen(8888, () => {
        console.log("Server is listening on port 8888");
    });