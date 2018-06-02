const request = require("request");


var getWeather = (latitude, longitude, callback) => {
    request({
      url: `https://api.darksky.net/forecast/7cc57dbdc77e46a3c33e699f4536db2b/${latitude},${longitude}`,
      json: true
    },(error, response, body) => {
      if(!error && response.statusCode === 200){
        console.log(`Temperature:  ${body.currently.temperature}F`);
        console.log(`ApparentTemperature:  ${body.currently.apparentTemperature}F`);

      }else{
        callback('Unable to fetch Weather');
      }
    })
  }
  
module.exports = {
  getWeather
}
