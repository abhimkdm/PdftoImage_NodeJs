const http = require("http");
const pdf = require("pdf-poppler");
const path = require("path");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Processed!");
  processImage();
});

const port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

function processImage() {
  //Change File path before executing this code.
  let filePath = "D:\\Neudesic\\POC\\ProcessPDFToImage\\input\\";
  let fileInput = filePath + "input.pdf";

  let opts = {
    format: "jpeg",
    out_dir: path.dirname(fileInput),
    out_prefix: path.basename(fileInput, path.extname(fileInput)),
    page: null,
  };

  pdf
    .convert(fileInput, opts)
    .then((res) => {
      console.log("Successfully converted");
    })
    .catch((error) => {
      console.error(error);
    });
}
