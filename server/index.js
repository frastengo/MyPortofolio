const express = require('express')
const app = express()
// const { SERVER_PORT } = process.env;

const SERVER_PORT = 4001;

app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`));