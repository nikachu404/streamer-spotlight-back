import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', (req, res) => {
  res.send('Hello, world');
});

app.listen(PORT);
