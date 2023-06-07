const prevbtn = document.querySelector("#prev-btn");
const nextbtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;


//Event Listener

prevbtn.addEventListener("click", goPrevPage)
nextbtn.addEventListener("click", goNextPage)


// Business Logic
function openBook() {
    book.style.transform = "translateX(50%)";
    prevbtn.style.transform = "translateX(-180px)";
    nextbtn.style.transform = "translateX(180px)";

}
function closeBook() {

}
function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped")
                paper1.getElementsByClassName.zIndex = 1;
                break;

            case 2:

                paper2.classList.add("flipped")
                paper2.getElementsByClassName.zIndex = 2;
                break;

            case 3:

                paper3.classList.add("flipped")
                paper3.getElementsByClassName.zIndex = 3;
                closeBook();
                break;
            default:
                throw new Error("unkown state")
        }
        currentLocation++;
    }

}
function goPrevPage() {
    

}
console.log(goNextPage)