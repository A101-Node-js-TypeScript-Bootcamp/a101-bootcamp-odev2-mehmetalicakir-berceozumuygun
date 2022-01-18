const express = require('express')
const app = express();
const endPoint = require('./routes/api') //Api klasörünü tanımlıyoruz
const axios = require('axios');

app.use(express.json()) //Json formatında okumak için
app.use('/api',endPoint) //Api'ye istekte bulunuyoruz.

app.listen(3000, () => {
    console.log("Server is running.");
})