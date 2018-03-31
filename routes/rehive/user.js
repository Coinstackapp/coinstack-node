const Rehive = require('rehive');
const rehive = new Rehive({apiVersion: 3, apiToken: '9706a798613cc8888800eebf0f6c3478a56fbaa63fe2f8103768fdd63b36ab59'});

rehive.admin.users.create({
    first_name: "Joe",
    last_name: "Soap",
    email: "joe@rehive.com",
}).then(function(user){
    console.log(user);
});
