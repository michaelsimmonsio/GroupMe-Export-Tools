// @ts-ignore
const fs = require('fs');

// Read the JSON file
fs.readFile('./data/message.json', 'utf8', (err: any, data: string) => {
    if (err) {
        console.error(err);
        return;
    }

    function getWordCount() {

        let finalCharCount = 0;
        let finalWordCount = 0;


        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);


            // Loop through each object in the JSON array
            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; text: any; }) => {
                // Check if the object has the "text" field
                if (obj.hasOwnProperty('text')) {
                    if (obj.text !== null) {
                        const characterCount = obj.text.length;
                        finalCharCount += characterCount;

                        const words = obj.text.split(' ');

                        // Count the number of words
                        const wordCount = words.length;

                        finalWordCount += wordCount;


                    }

                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

        console.log(finalCharCount)
        console.log(finalWordCount)

    }

    getWordCount()
});