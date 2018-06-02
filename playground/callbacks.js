var getUser = (id, callback) => {
  var user = {
    id:  id,
    name: 'MNam'
  }
  setTimeout(()=> {
    callback(user);
  }, 4444);
}

getUser(31, (userObj)=> {
  console.log(userObj)
});
