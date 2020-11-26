import express, { response } from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import cors from 'cors';        //if some error replace 'cors' with 'Cors'

//AppConfig
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://nabeelnajeeb8:rayyan2019@cluster0.stuqg.mongodb.net/tinderdb?retryWrites=true&w=majority"
//MiddleWares

app.use(express.json());
app.use(cors());

//dbConfig
mongoose.connect(connection_url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,});
//API endpoints
app.get('/', (req, res)=> res.status(200).send('Hello there!'));

app.post('/tinder/cards', (req, res)=>{
    const dbCard = req.body;
    Cards.create(dbCard, (err, data)=>{
        if(err)
        {
            response.status(500).send(err);
        }
        else
        {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards',(req, res)=>{
    Cards.find((err, data)=>{
        if(err)
        {
            response.status(500).send(err);
        }
        else
        {
            res.status(200).send(data);
        }
    })
});

//listener
app.listen(port, ()=> console.log(`whatsupppp on localhost:${port}`));