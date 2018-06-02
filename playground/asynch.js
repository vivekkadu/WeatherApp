console.log("Starting App");

setTimeout(() => {
  console.log("Inside timeout");
}, 2000);

setTimeout(() => {
  console.log("Inside timeout 2 ");
}, 0);

console.log("end");
