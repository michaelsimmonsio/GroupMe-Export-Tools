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
            const jsonData = JSON.parse(data);


            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; sender_id: any; text: any }) => {
                if (obj.hasOwnProperty('sender_id') && obj.text !== null) {

                    let result = sentiment.analyze(obj.text);

                    


                    if (scores.hasOwnProperty(obj.sender_id)) {

                        if (result.score < 0 && result.score > -10) {
                            // @ts-ignore
                            scores[obj.sender_id] += result.score;
                        }

                        
                    }
                    else {

                        if (result.score < 0 && result.score > -10) {
                            // @ts-ignore
                            scores[obj.sender_id] = result.score;
                        }
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