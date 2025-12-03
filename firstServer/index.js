const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = 5500;
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(`
     <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Myntra</title>
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body {
        width: 100vw;
        height: 100vh;
      }
      navbar {
        width: 100%;
        height: 4.5rem;
        display: flex;
        align-items: center;
        background-color: #262424;
      }
      ul {
        width: 100%;
        padding: 1.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
        ul li{
         list-style: none;
         }
      ul li a {
        font-size: 1.2rem;
        color: #ffffdd;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <navbar>
      <ul>
        <li><a href="/"> Home </a></li>
        <li><a href="/men"> Men </a></li>
        <li><a href="/women"> Women </a></li>
        <li><a href="/kids"> Kids </a></li>
        <li><a href="/carts"> Carts </a></li>
      </ul>
    </navbar>
`);

    if (req.url === "/") {
      res.write(
        `<h2 style="display: block; margin-top:3rem; text-align: center">Welcome! to Myntra home Section</h2>`
      );
    } else if (req.url === "/men") {
      res.write(
        `<h2 style="display: block; margin-top:3rem; text-align: center">Welcome! to Men Section</h2>`
      );
    } else if (req.url === "/women") {
      res.write(
        `<h2 style="display: block; margin-top:3rem; text-align: center">Welcome! to Women Section</h2>`
      );
    } else if (req.url === "/kids") {
      res.write(
        `<h2 style="display: block; margin-top:3rem; text-align: center">Welcome! to kids Section</h2>`
      );
    } else if (req.url === "/carts") {
      res.write(
        `<h2 style="display: block; margin-top:3rem; text-align: center">Welcome! to carts Section</h2>`
      );
    } else {
      res.write(
        `<h2 style="display: block; margin-top:3rem; text-align: center">Error 404: page not found</h2>`
      );
    }

    res.write(`</body></html>`);
    return res.end();
  })
  .listen(PORT, (error) => {
    if (!error) {
      console.log(`Server is listening on http://localhost:${PORT}`);
    }
  });
