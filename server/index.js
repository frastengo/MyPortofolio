const express = require('express')
const app = express()
const path = require('path')

app.use( express.static( `${__dirname}/../build` ) );

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 4001;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));