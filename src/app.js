const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./routes');
const error = require('./middlewares/error.middleware');
// const authRoutes = require('./routes/auth.routes');
// const conversationsRoutes=require('./routes/conversations.routes')
// const db =require('./utils/database');
// const models = require('./models/index');
// const transporter = require('./utils/mailer');


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));



// db.authenticate()
//   .then(() => console.log('Bd autenticada'))
//   .catch(error => console.log(error));

// db.sync({ force: true })
//   .then(() => console.log('bd sincronnizada'))
//   .catch(error => console.log(error));

// transporter.verify() //devuelkve una promesa
//   .then(() => console.log('transporter is ok'))
//   .catch((error) => console.log(error));



// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to my server' })
// })

routerApi(app);
app.use(error);
// app.use('/api/v1/auth', authRoutes)
// app.use('/api/v1', conversationsRoutes)

module.exports = app;