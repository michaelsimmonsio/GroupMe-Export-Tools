// @ts-ignore
const fs = require('fs');

// Read the JSON file
fs.readFile('./data/message.json', 'utf8', (err: any, data: string) => {
    if (err) {
        console.error(err);
        return;
    }

    function getBiggestFan() {

        let mostLiked: any = {};


        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);


            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; favorited_by: any; sender_id: any; created_at: any; }) => {
                if (obj.hasOwnProperty('favorited_by') && obj.favorited_by !== null && obj.sender_id !== null) {

                    for (let i = 0; i < obj.favorited_by.length; i++) {

                        if (mostLiked.hasOwnProperty(obj.sender_id)) {
                            if (mostLiked[obj.sender_id].hasOwnProperty(obj.favorited_by[i])) {
                                mostLiked[obj.sender_id][obj.favorited_by[i]] += 1
                            } else {
                                mostLiked[obj.sender_id][obj.favorited_by[i]] = 1
                            }
                        } else {
                            mostLiked[obj.sender_id] = {};
                            mostLiked[obj.sender_id][obj.favorited_by[i]] = 1

                        }


                        console.log(obj.favorited_by[i])
                    }


                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

        console.log(mostLiked)


    }


    getBiggestFan()
});