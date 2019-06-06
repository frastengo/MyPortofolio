const express = require('express')
const app = express()

const path = require('path')
// const {PORT} = process.env

// app.use( express.static( `${__dirname}/../build` ) );
app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req, res)=>{
    //   res.sendFile(path.join(__dirname, '../build/index.html'));
    // })
    
// app.get('*', function (req, res) {
//     const index = path.join(__dirname, 'build', 'index.html');
//     res.sendFile(index);
//   });

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = 4001;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));