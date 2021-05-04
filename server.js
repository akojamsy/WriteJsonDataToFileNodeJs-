const http = require('http');
const fs = require('fs');
const request = require('request');

let data;
//creating a server with HTTP variable
//http://jsonplaceholder.typicode.com/posts
const server = http.createServer((req, res) => {
    request({
        url: "http://jsonplaceholder.typicode.com/posts",
        json: true
    }, (err, response, body) => {
        data = JSON.stringify(body, undefined, 4);
        res.writeHead(200, { 'content-Type': 'text/plain' });
        fs.writeFile('result/posts.txt', data, (err, res) => {
            if (err) {
                console.log("Error! Could not write file to folder.");
            } else {
                console.log('File written successfully..!');
            }
        })
    })
})

//create a port

const port = 3000
server.listen(port, () => {
    console.log(`Server is running at ${port}`)
});





