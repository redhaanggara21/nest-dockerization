const fs = require('fs');
let readerStream = fs.createReadStream('./pgfile/tododb.json');
let writeStream = fs.createWriteStream("formatted.json");

readerStream.on('data', function (chunk: string) {
    let jsonData = JSON.parse(chunk);
    jsonData.forEach((element: { id: any; userEmail: any; title: any; description: any; createdDate: any; updatedDate: any; }) => {
        let obj = {
            _index: 'todos',
            _id: element.id,
            _source: {
                id: element.id,
                userEmail: element.userEmail,
                todo: {
                    title: element.title,
                    description: element.description,
                    createdDate: element.createdDate,
                    updatedDate: element.updatedDate
                }
            }
        };

        let newLine = JSON.stringify(obj) + "\n";
        writeStream.write(newLine);
    });
});