var http = require("http")
var datos = require("./utils/data.js")


const PORT = 3001

const server = http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      let urlRickMorty = req.url;
      let partesUrl = urlRickMorty.split("/");
      let obtenerId = partesUrl[partesUrl.length - 1];
      let idPersonaje = parseInt(obtenerId);
      let personaje = datos.find((p) => p.id === idPersonaje);

      if (personaje) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(personaje));
        res.end();
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Character not found");
        res.end();
      }
    }
  })
  .listen(PORT, "localhost");

  module.exports = server;