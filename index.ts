const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout

})
const {spawn} = require('child_process');

function displayOptions(): void {
    console.log("Enter a number to select the feature that you would like to run:")
    console.log("")
    console.log("1. Get most liked message")
    console.log("2. Get sentiment analysis")
    console.log("3. Get most messages")
    console.log("4. Get most common word")
    console.log("5. Get biggest fans")
    console.log("6. Get word count")
    console.log("7. Get certain word")
    console.log("8. Get certain phrase")
    console.log("9. Get total messages by year")
    console.log("0. Exit")

}


function childProcess(filePath: string) {

    const childProcess = spawn('node', [filePath]);

    childProcess.stdout.on('data', (data: any) => {
        console.log(`Child process output: ${data}`);
    });

    childProcess.stderr.on('data', (data: any) => {
        console.error(`Child process error: ${data}`);
    });

    childProcess.on('close', (code: any) => {
        console.log(`Child process exited with code ${code}`);
    });

}

function startFeature(arg: Number) {
    switch (arg) {
        case 1:
            childProcess('./features/getMostLiked.js')
            break;
        case 2:
            childProcess('./features/getSentimentAnalysis.js')
            break;
        case 3:
            childProcess('./features/getMostMessages.js')
            break;
        case 4:
            childProcess('./features/getMostCommonWord.js')
            break;
        case 5:
            childProcess('./features/getBiggestFan.js')
            break;
        case 6:
            childProcess('./features/getWordCount.js')
            break;
        case 7:
            childProcess('./features/getCertainWord.js')
            break;
        case 8:
            childProcess('./features/getCertainPhrase.js')
            break;
        case 9:
            childProcess('./features/getMessagesByYear.js')
            break;
        case 0:
            console.log("Exiting...")
            break;
        default:
            console.log("Invalid input")
            break;
    }
}


function start(): void {
    displayOptions();
    readline.question(`Starting...`, (arg: string) => {
        startFeature(Number(arg))
        readline.close()
    })
}

start()



