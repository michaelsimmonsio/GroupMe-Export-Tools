// @ts-ignore
const fs = require('fs');

// Read the JSON file
fs.readFile('./data/message.json', 'utf8', (err: any, data: string) => {
    if (err) {
        console.error(err);
        return;
    }

let searchWords = {
    "words": [
        "word_here"
    ]
}

    function getMostCommonWordJSON() {

        try {
            const jsonData = JSON.parse(data);

            const wordFrequency = {};

            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; text: string; sender_id: string; name: string}) => {
                if (obj.hasOwnProperty('text') && obj.text !== null) {
                    const words = obj.text.split(' ');

                    words.forEach((word) => {

                        if (searchWords.words.includes(word.toLowerCase())) {

                            console.log(obj.sender_id + " (" + obj.name + ") sent: " + obj.text)
                            if (wordFrequency.hasOwnProperty(word.toLowerCase())) {
                                // @ts-ignore
                                wordFrequency[word.toLowerCase()]++;
                            } else {
                                // @ts-ignore
                                wordFrequency[word.toLowerCase()] = 1;
                            }
                        }
                    });
                }
            });

            // Find the most common word
            let mostCommonWord = '';
            let maxFrequency = 0;

            for (const word in wordFrequency) {
                // @ts-ignore
                if (wordFrequency[word] > maxFrequency) {
                    mostCommonWord = word;
                    // @ts-ignore
                    maxFrequency = wordFrequency[word];
                }
            }

            console.log(mostCommonWord + `has been said ${maxFrequency} time(s).`);

            const wordFrequencyArray = Object.entries(wordFrequency);

            // Sort the wordFrequencyArray based on frequencies in descending order
            wordFrequencyArray.sort((a: any, b: any) => b[1] - a[1]);


        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

    }

    function getMostCommonWord(arg: string) {

        try {
            const jsonData = JSON.parse(data);

            const wordFrequency = {};

            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; text: string; sender_id: string; name: string}) => {
                if (obj.hasOwnProperty('text') && obj.text !== null) {

                    if (obj.text.toLowerCase().includes(arg)) {
                        console.log(obj.sender_id + " (" + obj.name + ") sent: " + obj.text)
                    }
                }
            });
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

    
    
    }

    function startInput() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
        readline.question(`What word would you like to search for? (Type "!exit" to exit.): `, (word: string) => {

            if (word == "!exit") {
                readline.close()
            } else { getMostCommonWord(word); readline.close(); startInput() }
        })
    }

    startInput()


});