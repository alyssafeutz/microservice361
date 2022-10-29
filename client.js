// //  Image Client
const fs = require('fs');
const http = require('http');

http.get('http://localhost:8000', (response) => {
    var data = ''
    response.on('data', (image) => {
        data = image;
    });
    response.on('end', () => {
        fs.writeFile('image.jpg', data, err => {
            if (err) {console.error(err)}
        
    });

})})
