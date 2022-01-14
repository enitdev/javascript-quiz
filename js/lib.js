const delayInMilliseconds = 1500; //1.5 second

function answerChosen(div) {
    let x = div.id;
    let z = document.getElementById(x).innerHTML
    let id1val = document.getElementById(x).style.backgroundColor = "#BF8D13";
    decision(x, z);
}
function decision(brder, answer) {
    if (answer == "Calvin Harris") {
        setTimeout(function() {
            let id1val = document.getElementById(brder).style.backgroundColor = "#1C9816";
        }, delayInMilliseconds);
    } else {
        setTimeout(function() {
        let id1val = document.getElementById(brder).style.backgroundColor = "#982216";
        }, delayInMilliseconds);
    }
}