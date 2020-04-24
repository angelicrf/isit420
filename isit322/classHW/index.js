let http = require('http');
let PORT = 3000;

let serveEntry = response => {
    response.writeHead (200, {"Content-Type": "text/html" });
    response.write("<h2>This is the entry point for this page</h2>");
    response.write("<a href='/nextPage'>NextPage</a>");
    response.end();

}
let serveNextPage = response => {
    response.writeHead (200, {"Content-Type": "text/html" })
    response.write("<h2>This is the entry point for nextPage</h2>");
    response.write("<a href='./'>Go back Home</a>");
    response.end();
}
let onRequest = (request, response) => {
    if (request.method == 'GET' && request.url == '/'){
        serveEntry(response);
    }else if(request.method == 'GET' && request.url == '/nextPage'){
        serveNextPage(response);
    }
}
http.createServer(onRequest).listen(PORT, '127.0.0.1', () =>{
    console.log(`the server is listening to the port: ${PORT}`);
});