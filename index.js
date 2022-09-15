  import express from 'express';
const app = express();
import './models/dbConfig.js';
import Routes from './routes/routes.js';
import session from 'express-session'
import bodyParser from 'body-parser';
import MongoStore from 'connect-mongo';


app.use(bodyParser.json());
app.use(
    session({
      name: 'Green_Searcher',
      secret: 'Green_Searcher',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/node-api" }),
      cookie: { maxAge: 24 * 3600 * 1000 },
    })
  );
app.use('/product', Routes);

app.listen(5500, () => console.log('Server started: 5500'))