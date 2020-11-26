const fs = require('fs');

fs.writeFile('example.txt', "this  is an example text", (err) => {
    if (err) {
        console.log('FIEL NOT CREATED');
    } else {
        console.log('FIEL CREATED');
        fs.readFile('example.txt', (err, file) => {
            fs.writeFile('example.txt', "this  is an example text", (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(file);
                }
            })
        });
    }
});


// fs.rename('example.txt', 'example22.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File was renamed');
//     }
// });


fs.appendFile('example.txt', 'some data to append', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File was appended');
    }
});

fs.mkdir('data/1/2/3' , (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('mkdir was success');
    }
});