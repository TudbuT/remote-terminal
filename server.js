const { exec } = require('child_process');
const express = require("express");

exec('cat *.js bad_file | wc -l', (err, stdout, stderr) => {
  if (err) {
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

const app = express();


app.get("/", function(req, res) {
  var r = req.query
  
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Listening on port " + listener.address().port);
});
