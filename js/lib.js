function answerChosen(div) {
    let x = div.id;
    let z = document.getElementById(x).innerHTML
    decision(x, z);
}
function decision(brder, answer) {
    if (answer == "Calvin Harris") {
        let id1val = document.getElementById(brder).style.backgroundColor = "#1C9816";
    } else {
        let id1val = document.getElementById(brder).style.backgroundColor = "#982216";
    }
}