const http = require("http");
const fs = require("fs");

http
  .createServer((req, resp) => {
    //============
    let collectHeaderData = fs.readFileSync("html/header-22.html", "utf-8");
    let collectFooterData = fs.readFileSync("html/footer-22.html", "utf-8");

    //==========
    let file = "/home-22";
    if (req.url != "/") {
      file = req.url;
    }

    if (req.url != "/style-22.css") {
      fs.readFile("html" + file + ".html", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("Internal Server Error");
          return false;
        }
        resp.write(collectHeaderData + "" + data + "" + collectFooterData);
        resp.end();
      });
    }
     else if (req.url == "/style-22.css") {
      fs.readFile("html/style-22.css", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("Css not found");
          return false;
        }
        resp.writeHead(200, { "content-type": "text/css" });

        resp.end(data);
      });
    }
  })
  .listen(4400);
