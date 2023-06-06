# GroupMe-Export-Tools
A collection of tools to help interpret the data provided from your GroupMe export's messages file using Typescript/NodeJS. 

These tools are meant for simple analysis of a group chat's data, and is recommended to be modified before use. Just a small project I worked on.

## Getting Started

1. Download your GroupMe data and find your "messages.json" file (https://support.microsoft.com/en-us/office/how-do-i-export-my-groupme-data-1f6875bf-7871-4ade-8608-4c606cd5f518)
2. Download/clone these files into a directory
3. Initialize Typescript in the directory and compile all .ts files using "tsc"
4. Create a **data** directory in the project's directory, and put the "messages.json" file in that directory
5. Use NodeJS to run the newly created "index.js" file (use a terminal to run "node index.js")
6. There will be instructions for running the different features included in this project. You can also just run each feature file individually which will also work perfectly

Note: The "getCertainPhrase" feature has boilerplate code for searching phrases based on a JSON object. Normally, this function is never called and the user is just asked to enter a phrase themselves. If you would like to search multiple phrases at a time, use this function and edit the JSON object to include the words you'd like to search.