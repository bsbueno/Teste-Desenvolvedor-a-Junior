import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();
createConnection();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/',function(req,res){
    res.json({message:'Teste'});
}
)

app.use(bodyParser.json());
app.use(routes);
app.listen (3031);