const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

const staticFolder = express.static(path.join(__dirname, 'public'))
app.use(staticFolder)
asdasdasdasdasd
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})