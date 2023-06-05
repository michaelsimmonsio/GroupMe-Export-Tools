// @ts-ignore
const fs = require('fs');

// Read the JSON file
fs.readFile('./data/message.json', 'utf8', (err: any, data: string) => {
    if (err) {
        console.error(err);
        return;
    }

    function getMostLiked() {

        let mostLiked = {};


        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);


            // Loop through each object in the JSON array
            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; favorited_by: any; sender_id: any; created_at: any; }) => {
                // Check if the object has the "text" field
                if (obj.hasOwnProperty('favorited_by') && obj.favorited_by !== null && obj.sender_id !== null) {
                    const likeCount = obj.favorited_by.length;
                    const createdAt = obj.created_at
                    console.log("likes: " + likeCount + " created at: " +  createdAt)

                    if (mostLiked.hasOwnProperty(obj.sender_id)) {
                        // @ts-ignore
                        mostLiked[obj.sender_id] += likeCount;
                    }
                    else {
                        // @ts-ignore
                        mostLiked[obj.sender_id] = likeCount;
                    }
                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

        console.log(mostLiked)


    }


    getMostLiked()
});