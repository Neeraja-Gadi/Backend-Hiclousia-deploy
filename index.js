const express = require('express');
const app = express();
app.get('/',async function(req,res){
    res.json({ msg  :   "Hi From Hiclousia Backend"})
} );


// PORT
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`server running On port ${port}`);
});