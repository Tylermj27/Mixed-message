function randNum(num) {
    //We will use this to help choose which statement will be printed in the later functions
    return Math.floor(Math.random()*num);
}

let messageComp = { //This will hold the main parts of the message that will be printed out
    energyLevel: ["feeling burnt out", "feeling refreshed", "starting to feel worn out", "ready for the weekend"],
    activity: ["go take a nap", "press forward", "ask for help", "start fresh tomorrow", "keep up the good work"],
    motivationalQuote:  ["'The best preparation for tomorrow is doing your best today' - H. Jackson Brown, Jr", "'No act of kindness, no matter how small, is ever wasted' - Aesop", "'If I have seen further than others, it is by standing upon the shoulds of giants' - Isaac Newton", "'It is during our darkest moments that we must focus to see the light' - Aristotle Onassis"
]
};

function getMessage() {
    for(prop in messageComp) {
        //This will tell us which of the above options will be printed
        let index = randNum(messageComp[prop].length);

        switch(prop) {
            case "energyLevel":
                console.log(`It's been a long day and you're ${messageComp[prop][index]}!`)
                break
            case "activity":
                console.log(`Since it's the end of the day you should ${messageComp[prop][index]}.`)
                break
            case "motivationalQuote":
                console.log(`Remember a wise person once said ${messageComp[prop][index]}.`)
                break
        }
    }
}

getMessage();