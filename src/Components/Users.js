

export default props =>

// fetch('https://localhost:44395/api/Values')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });


fetch('https://localhost:44395/api/Values', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({
    "id": 5,
    "username": "asdf"
  }), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
    