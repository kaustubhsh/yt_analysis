import { PythonShell } from "python-shell";

let checkusername = "";
let instaUsername = "";
let twitterUsername = "";
let stringToFind = "";
let lattitude = "";
let longitude = "";
let radius = "";

let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: `${__dirname}/Python_Scripts/twitter`,
    args: [twitterUsername] 
}

PythonShell.run('func_call.py', options, function (err, results) {
    if (err) {
        console.log(err);
    };
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});