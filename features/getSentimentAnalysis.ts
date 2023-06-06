// @ts-ignore
const fs = require('fs');

// @ts-ignore
const Sentiment = require('sentiment')
// @ts-ignore
const sentiment = new Sentiment();

// Read the JSON file
fs.readFile('./data/message.json', 'utf8', (err: any, data: string) => {
    if (err) {
        console.error(err);
        return;
    }

    function getSentimentScore() {

        let scores = {};


        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);


            // Loop through each object in the JSON array
            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; sender_id: any; text: any }) => {
                // Check if the object has the "text" field
                if (obj.hasOwnProperty('sender_id') && obj.text !== null) {

                    let result = sentiment.analyze(obj.text);

                    


                    if (scores.hasOwnProperty(obj.sender_id)) {
                        // @ts-ignore
                        scores[obj.sender_id] += result.score;

                        
                    }
                    else {
                        // @ts-ignore
                        scores[obj.sender_id] = result.score;
                    }
                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

        console.log(scores)


    }


    getSentimentScore()
});