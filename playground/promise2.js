const request = require("request");

var geocodeAdd = (address) => {
 return new Promise((resolve, reject) => {
  
    var encodedAdress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=AIzaSyAnQl7fB9VExCz-wnb2qowUt09kXx04iXc`,
        json:true
      },(error, response, body) => {
         //console.log(JSON.stringify(body, undefined, 2));
         if(error){
           reject('Unable to Connect to Server')
         }else if(body.status === 'ZERO_RESULTS'){
          reject("Unable to find Address");
         }else if(body.status === 'OK'){
           resolve({
             address: body.results[0].formatted_address,
             latitude: body.results[0].geometry.location.lat,
             longitude: body.results[0].geometry.location.lng
           });
         }  
      });

});
};

geocodeAdd('441501').then((location) => {
 console.log(location);
}, (error) => {
  console.log(error);
});