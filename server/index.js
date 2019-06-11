const express = require('express')
const app = express()


app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = process.env;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));