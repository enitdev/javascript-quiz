const delayInMilliseconds15 = 1500; //! 1.5 second
// const delayInMilliseconds05 = 500; //! .5 second
let questionNum = 0;
let qCorrect = 0;

function yourScore(qTitle, qScore, qFeedback) {
    // This is a bitwise or, and you want a logical or
    // Here the statment will evaluate to `if (qCorrect == 11)`
    // 9  == 0b1001
    // 10 == 0b1010
    // 9 | 10 == 0b1011 == 11
    if (qCorrect == 9 || qCorrect == 10) {
        document.getElementById(qTitle).innerHTML = "Superstar DJ";
        document.getElementById(qScore).innerHTML = qCorrect;
        document.getElementById(qFeedback).innerHTML = "That was amazing! Where did you gather all this knowledge from?! I'm sure we'll be seeing you headlining events in the future";
    // If we want to shortcut, then we can use Array.includes 
    // 6 | 7 | 8 == 15
    } else if ([6, 7, 8].includes(qCorrect)) {
        document.getElementById(qTitle).innerHTML = "Great DJ";
        document.getElementById(qScore).innerHTML = qCorrect;
        document.getElementById(qFeedback).innerHTML = "That was some impressive score. Have you thought about being doing a mobile disco? I really think you could WOW at parties";
    // 4 | 5 == 5
    } else if (qCorrect == 4 | 5) {
        document.getElementById(qTitle).innerHTML = "DJ in the making";
        document.getElementById(qScore).innerHTML = qCorrect;
        document.getElementById(qFeedback).innerHTML = "We've seen better, we've seen worse. With a little grit and determination you could be behind the decks in no time.";
    } else {
        document.getElementById(qTitle).innerHTML = "novice";
        document.getElementById(qScore).innerHTML = qCorrect;
        document.getElementById(qFeedback).innerHTML = "Have you thought about a career in retail?";
    }
}
function changeQ(qID) {
    // Extraneous assignments
    document.getElementById(qID).style.display = "none";
    qID++;
    document.getElementById(qID).style.display = "block";
}
function answerChosen(div, num) {
    let x = div.id;
    let y = num;
    let z = document.getElementById(x).innerHTML
    // TODO change all color codes to constants like "MEDIUM_ORANGE", "DARK_GREEN", and "DARK_RED"
    let id1val = document.getElementById(x).style.backgroundColor = "#BF8D13";
    decision(x, y, z);
}
// Question 10 answerChosen
function answerChosen10(div, num, qTitle, qScore, qFeedback) {
    // Avoid copy/paste wherever possible
    answerChosen(div, num);
        //
    let a = qTitle.id;
    let b = qScore.id;
    let c = qFeedback.id;
    yourScore(a, b, c);
}
function decision(brderId, frameId, answer) {
    // There is a lot of duplicate code below. It should be broken out.
    // Use the switch statement just to determine if the answer was correct,
    // then have a single place where your logic for success or failure happens
    /*
    let wasCorrect = false;
    switch (frameId) {
        case 1:
            wasCorrect = (answer == "Calvin Harris");
            break;
        ...
    }

    // TODO redo the correct/incorrect stuff to remove as much duplicate code as possible
    */


    switch(frameId) {
    case 1:
        if (answer == "Calvin Harris") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);   
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 2:
        if (answer == "Acapella") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 3:
        if (answer == "XLR") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 4:
        if (answer == "Funky House") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 5:
        if (answer == "Walter Winchell") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 6:
        if (answer == "SE1 6DP") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 7:
        if (answer == "Three") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 8:
        if (answer == "1,000,000") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 9:
        if (answer == "Fatboy Slim") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    case 10:
        if (answer == "Armin Van Buuren") {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#1C9816";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);
                qCorrect++;
            }, delayInMilliseconds15);
            break;
        } else {
            setTimeout(function() {
                let id1val = document.getElementById(brderId).style.backgroundColor = "#982216";
                setTimeout(function() {
                    changeQ(frameId);
                }, delayInMilliseconds15);  
            }, delayInMilliseconds15);
            break;
        }
    }    
}