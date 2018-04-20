const express = require('express')
const app = express()
const port = 4002;
app.get('/', (req, res) => res.send('Hello World BABY!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))