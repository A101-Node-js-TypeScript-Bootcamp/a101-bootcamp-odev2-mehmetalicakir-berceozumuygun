const express = require('express')
const app = express();
const endPoint = require('./routes/api') //Api klasörünü tanımlıyoruz
const axios = require('axios');
const jwt = require('./helpers/jwt')
const errorHandler = require('./helpers/errorHandler')

app.use(express.json()) //Json formatında okumak için
app.use(jwt())
app.use('/api',endPoint) //Api'ye istekte bulunuyoruz.
app.use(errorHandler)

app.listen(3000, () => {
    console.log("Server is running.");
})