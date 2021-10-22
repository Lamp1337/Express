const express = require("express");
const prompt = require("prompt-sync")();
const app = express();
const ip = prompt("Server IP : ")
const port = prompt("Server Port (17091) : ")

app.get('/', (req, res)=> {
    res.statusCode = 200;
    res.send();
    res.end();
    res.destroy();
    req.connection.destroy()
})
app.post('/growtopia/server_data.php', (req, res) => {
    if (req.method.toLowerCase() === "post") {
        res.statusCode = 200;
        res.send(`server|${ip}\nport|${port}\ntype|1\n#maint|Server is currently under maintanance We will back ASAP\n\nbeta_server|${ip}\nbeta_port|${port}\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
        res.end();
        res.destroy();
    }
    else 
        res.destroy();
})

app.listen(80)
