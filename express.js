const express = require("express");
const prompt = require("prompt-sync")();
const app = express();
const ip = prompt("Server IP : ")
const port = prompt("Server Port (17091) : ")
var packet = `server|${ip}\nport|${port}\ntype|1\n#maint|Server is currently under maintanance We will back ASAP\n\nbeta_server|${ip}\nbeta_port|${port}\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`;

app.post('/growtopia/server_data.php', (res) => {
    if (req.method.toLowerCase() === "post") {
        res.writeHead(200, {"Content-Type": "text/html"} );
        res.send(packet);
        res.end();
        res.destroy();
    }
    else 
        res.destroy();
});

app.listen(80)
