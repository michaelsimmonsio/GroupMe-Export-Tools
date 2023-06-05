// @ts-ignore
const fs = require('fs');

// Read the JSON file
fs.readFile('./data/message.json', 'utf8', (err: any, data: string) => {
    if (err) {
        console.error(err);
        return;
    }

    function getMostLiked() {

        let year2019 = 0;
        let year2020 = 0;
        let year2021 = 0;
        let year2022 = 0
        let year2023 = 0;



        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);


            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; created_at: any }) => {
                if (obj.hasOwnProperty('created_at') && obj.created_at != null) {

                    if (obj.created_at > 1577880000 && obj.created_at < 1609502400) {
                        year2020++
                    }
                    else if (obj.created_at > 1609502400 && obj.created_at < 1641038400) {
                        year2021++
                    }
                    else if (obj.created_at > 1641038400 && obj.created_at < 1672574400) {
                        year2022++
                    }
                    else if (obj.created_at > 1672574400) {
                        year2023++
                    } else {
                        year2019++
                    }


                    
                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

        console.log("2019: " + year2019)
        console.log("2020: " + year2020)
        console.log("2021: " + year2021)
        console.log("2022: " + year2022)
        console.log("2023: " + year2023)

        console.log("Total: " + (year2019 + year2020 + year2021 + year2022 + year2023))



    }


    getMostLiked()
});