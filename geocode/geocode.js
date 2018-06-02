const request = require("request");


var geocodeAddress = (urlAddress, callback) => {

    var encodedAdress = encodeURIComponent(urlAddress);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=AIzaSyAnQl7fB9VExCz-wnb2qowUt09kXx04iXc`,
        json:true
      },(error, response, body) => {
         //console.log(JSON.stringify(body, undefined, 2));
         if(error){
           callback('Unable to Connect to Server')
         }else if(body.status === 'ZERO_RESULTS'){
          callback("Unable to find Address");
         }else if(body.status === 'OK'){
           callback(undefined, {
             address: body.results[0].formatted_address,
             latitude: body.results[0].geometry.location.lat,
             longitude: body.results[0].geometry.location.lng
           });
         }  
      });
}


module.exports = {
  geocodeAddress
}