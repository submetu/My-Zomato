const express = require('express')
const app = express();
var path = require('path');
var bodyParser = require('body-parser')
var axios = require('axios');
const port = 4002;
app.get('/', (req, res) => res.send('Hello World BABY!'))



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))