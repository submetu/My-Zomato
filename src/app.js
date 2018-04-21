const express = require('express')
const app = express();
var path = require('path');
var bodyParser = require('body-parser')
var axios = require('axios');
const port = 4002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//for development CORS origin
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//zomato search locations
app.post('/location', (req,res)=>{
    let location = req.body.location ? req.body.location : '';
    if(location){
        axios.get('https://developers.zomato.com/api/v2.1/locations', {
            params: {
              'query': location
            },
            headers: {
              'user-key': 'fe966592ab403e2df39e81f189d31eec'
            }
          })
            .then(response =>{
               res.json(response.data.location_suggestions);
            })
            .catch(function (error) {
                res.json({
                    error:error
                })
            });
    }
});


app.get('*', (req, res) => res.sendFile('/index.html',{ root: __dirname }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))