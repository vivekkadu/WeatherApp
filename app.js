const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

//console.log(argv.address);
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage)
  }else{
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResult) => {
      if(errorMessage) {
        console.log(errorMessage);
      }else{
        console.log(JSON.stringify(weatherResult, undefined, 2));
      }
    });
  }
});



