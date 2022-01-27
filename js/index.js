"use strict";

let workNavEntries = document.getElementsByClassName("workContents");
let workNavIndex = 0;

for (let i = 1; i < workNavEntries.length; i++) {
    // Set every entry in the work section to nonvisible except for the first (most current) one.
    workNavEntries[i].style.display = "none";
}


function workNavGoBack() {
    if (workNavIndex > 0) {
        workNavIndex--;
        let curr = document.getElementById("workEntry" + workNavIndex);
        let prev = document.getElementById("workEntry" + (workNavIndex + 1));
        curr.style.display = "flex";
        prev.style.display = "none";
    }
}

function workNavGoForward() {
    if (workNavIndex < workNavEntries.length - 1) {
        workNavIndex++;
        let curr = document.getElementById("workEntry" + workNavIndex);
        let prev = document.getElementById("workEntry" + (workNavIndex - 1));
        curr.style.display = "flex";
        prev.style.display = "none";
    }
}