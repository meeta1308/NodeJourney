const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = 5500;
http
  .createServer((req, res) => {
    console.log("URL:", req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if (req.url === "/") {
      res.write(`
      <html >
        <title>Making a Myntra Navbar</title>
        <navbar style=" display: flex;
  justify-content: space-around;
  align-items: center; height:45px; width:100%;background-color:rgba(34, 34, 31, 1) ">
     <a href="/" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Home </a> 
        <a href="/men" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Men </a> 
        <a href="/women" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> 
        Women </a> 
        <a href="/kids" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Kids </a>
        <a href="/carts" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Carts </a></navbar>
        <h2 style=" display:block; text-align:center">Welcome to Myntra</h2>
      </html>
    `);

      return res.end();
    } else if (req.url === "/men") {
      res.write(`
      <html >
        <navbar style=" display: flex;
  justify-content: space-around;
  align-items: center; height:45px; width:100%;background-color:rgba(34, 34, 31, 1) ">
     <a href="/" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Home </a> 
        <a href="/men" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Men </a> 
        <a href="/women" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> 
        Women </a> 
        <a href="/kids" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Kids </a>
        <a href="/carts" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Carts </a></navbar>
        <h2 style=" display:block; text-align:center">Welcome! to Men Section</h2>
      </html>
    `);
      return res.end();
    } else if (req.url === "/women") {
      res.write(`
      <html >
        <navbar style=" display: flex;
  justify-content: space-around;
  align-items: center; height:45px; width:100%;background-color:rgba(34, 34, 31, 1) ">
     <a href="/" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Home </a> 
        <a href="/men" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Men </a> 
        <a href="/women" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> 
        Women </a> 
        <a href="/kids" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Kids </a>
        <a href="/carts" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Carts </a></navbar>
        <h2 style=" display:block; text-align:center">Welcome! to Women Section</h2>
      </html>
    `);
      return res.end();
    } else if (req.url === "/kids") {
      res.write(`
      <html >
        <navbar style=" display: flex;
  justify-content: space-around;
  align-items: center; height:45px; width:100%;background-color:rgba(34, 34, 31, 1) ">
     <a href="/" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Home </a> 
        <a href="/men" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Men </a> 
        <a href="/women" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> 
        Women </a> 
        <a href="/kids" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Kids </a>
        <a href="/carts" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Carts </a></navbar>
        <h2 style=" display:block; text-align:center">Welcome! to Kids Section</h2>
      </html>
    `);
      return res.end();
    } else if (req.url === "/carts") {
      res.write(`
      <html >
        <navbar style=" display: flex;
  justify-content: space-around;
  align-items: center; height:45px; width:100%;background-color:rgba(34, 34, 31, 1) ">
     <a href="/" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Home </a> 
        <a href="/men" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Men </a> 
        <a href="/women" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> 
        Women </a> 
        <a href="/kids" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Kids </a>
        <a href="/carts" style="text-decoration:none;  font-size:1rem; color:rgba(250, 250, 240, 1);"> Carts </a></navbar>
        <h2 style=" display:block; text-align:center">Welcome! to Carts Section</h2>
      </html>
    `);
      return res.end();
    } else {
      res.write(`Error 404: Page not found`);
      res.end();
    }
  })
  .listen(PORT, (error) => {
    if (!error) {
      console.log(`Server is listening on http://localhost:${PORT}`);
    }
  });
