const express =  require('express');
const {serverConfig , Logger} =  require('./config');

const apiRoutes =  require('./routes');

const app =  express();

app.use('/api' ,  apiRoutes);

app.listen(serverConfig.PORT ,  () =>{
    console.log(`server is running on port ${serverConfig.PORT}`);
    Logger.info("successfully started the server" ,  {});
    
})