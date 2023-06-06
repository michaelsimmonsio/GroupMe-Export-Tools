// @ts-ignore
const fs = require('fs');

// Read the JSON file
fs.readFile('./data/message.json', 'utf8', (err: any, data: string) => {
    if (err) {
        console.error(err);
        return;
    }

    function getMostMessages() {

        let messageCounter = 0;

        let mostMessages = {};


        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);


            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; sender_id: any; }) => {
                if (obj.hasOwnProperty('sender_id') && obj.sender_id !== null) {
                    messageCounter += 1;


                    if (mostMessages.hasOwnProperty(obj.sender_id)) {
                        // @ts-ignore
                        mostMessages[obj.sender_id] += 1;
                    } else {
                        // @ts-ignore
                        mostMessages[obj.sender_id] = 1;
                    }
                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

        console.log(mostMessages)
        console.log(messageCounter)


    }


    getMostMessages()
});