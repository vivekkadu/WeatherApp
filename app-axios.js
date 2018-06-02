const yargs = require('yargs');

const axios = require('axios');

const argv = yargs
            .options({
              a: {
                describe: 'Address to fetch weather',
                alias: 'address',
                demand: true,
                string: true
             }
            })
            .help()
            .alias('help', 'h')
            .argv;


var encodedAdress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=AIzaSyAnQl7fB9VExCz-wnb2qowUt09kXx04iXc`;

axios.get(geocodeUrl).then((reponse) => {
    if(reponse.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }

    var latitude = reponse.data.results[0].geometry.location.lat;
    var longitude = reponse.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/7cc57dbdc77e46a3c33e699f4536db2b/${latitude},${longitude}`;

    console.log(reponse.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((reponse) => {
   var temperature = reponse.data.currently.temperature;
   var apparentTemperature = reponse.data.currently.apparentTemperature;

   console.log(`Temperature: ${temperature}`);
   console.log(`ApperentTemperature: ${apparentTemperature}`);

}).catch((e) => {
    if(e.code === 'ENOTFOUND') {
        console.log('Unable to connrct to server');
    }else {
     console.log(e.message);
    }
});

