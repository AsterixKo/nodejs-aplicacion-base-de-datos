import express from 'express';
import { userRoutes } from './routes/users.routes';

//instanciar express framework
const app = express();

//Setting the port of application server
app.set('port', 3000);

//Load the file routes users
app.use('/users', userRoutes.router);

// Start the server, using the port defined
app.listen(app.get('port'), () => {
    console.log(`The server is running on port ${app.get('port')}`);
});

