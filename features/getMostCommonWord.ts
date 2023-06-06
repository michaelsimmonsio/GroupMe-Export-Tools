// @ts-ignore
const fs = require('fs');

fs.readFile('./data/message.json', 'utf8', (err: any, data: string) => {
    if (err) {
        console.error(err);
        return;
    }

    function getMostCommonWord() {

        try {
            const jsonData = JSON.parse(data);

            const wordFrequency = {};

            jsonData.forEach((obj: { hasOwnProperty: (arg0: string) => any; text: string; }) => {
                if (obj.hasOwnProperty('text') && obj.text !== null) {
                    // Split the text into an array of words
                    const words = obj.text.split(' ');

                    // Count the frequency of each word
                    words.forEach((word) => {
                        if (wordFrequency.hasOwnProperty(word)) {
                            // @ts-ignore
                            wordFrequency[word]++;
                        } else {
                            // @ts-ignore
                            wordFrequency[word] = 1;
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

            console.log(`Most common word: ${mostCommonWord}`);
            console.log(`Frequency: ${maxFrequency}`);

            const wordFrequencyArray = Object.entries(wordFrequency);

            // Sort the wordFrequencyArray based on frequencies in descending order
            wordFrequencyArray.sort((a: any, b: any) => b[1] - a[1]);

            // Print the top 10 most common words
            for (let i = 0; i < 50 && i < wordFrequencyArray.length; i++) {
                console.log(`Word: ${wordFrequencyArray[i][0]}`);
                console.log(`Frequency: ${wordFrequencyArray[i][1]}`);
                console.log('---');
            }
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }

    }

    getMostCommonWord()
});