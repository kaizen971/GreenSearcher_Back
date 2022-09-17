  import express from 'express';
const app = express();
import './models/dbConfig.js';
import Routes from './routes/routes.js';
import session from 'express-session'
import bodyParser from 'body-parser';
import MongoStore from 'connect-mongo';

const port = process.env.PORT
app.use(bodyParser.json());
app.use(
    session({
      name: 'Green_Searcher',
      secret: 'Green_Searcher',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: "mongodb+srv://Kaizen971:Pokemon971971@greensearcher.du860nt.mongodb.net/GreenSearcher?retryWrites=true&w=majority" }),
      cookie: { maxAge: 24 * 3600 * 1000 },
    })
  );
app.use('/product', Routes);

app.listen(port)