const express =  require('express');
const {PORT} =  require('./config');

const apiRoutes =  require('./routes');

const app =  express();

app.use('/api' ,  apiRoutes);

app.listen(PORT ,  () =>{
    console.log(`server is running on port ${PORT}`);
    
})