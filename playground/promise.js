
var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) =>{
      setTimeout(() => {
           if(typeof a === 'number' && typeof b === 'number'){
             resolve( a+b );
           }  else{
             reject('type no only');
           } 
      }, 1500)
  });
};
 
asyncAdd(5,7).then((res) => {
  console.log(`Result: ${res}`);
  return asyncAdd(res, 10);
}).then((res) => {
   console.log(`New Result: ${res}`)
}).catch((errorMessage) => {
   console.log(errorMessage);
});



// var somePromise = new Promise((resolve, reject) => {
//   // resolve('fkfk');
//   reject('dudjdjk');
// });



// somePromise.then((message) => {
//    console.log('sucess', message);
// }, (errorMessage) => {
//     console.log('fail:', errorMessage);
// });