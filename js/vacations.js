//Vachan Dhillon, 2018/10/19, JavaScript Final Project, vachan.dhillon@edu.sait.ca

// SETTING THE TIME IN THE FOOTER//
//the function to be called later, this takes a zero-indexed number and returns the corresponding full month name
let monthName=function(num){
    switch(num){
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
    }
}
//defines the time function, creates a date object and fills the holder element with the proper format date 
let getTime=function(){
    //get holder, get time object, get the parts, for the month call the monthName function to get a name instead of number
    let footerTimeGrab=document.getElementById("timeHold");
    let theTime=new Date();
    let theMonth=theTime.getMonth()
    theMonth=monthName(theMonth);
    let theYear=theTime.getFullYear().toString();
    let theDayOfMonth=theTime.getDate().toString();
    //now replace the innerhtml of the holder with the variables
    footerTimeGrab.innerHTML=`${theDayOfMonth} ${theMonth} ${theYear}`
}
//execute time function once on load, well, 1 ms after load
setTimeout(getTime,1);

//VACATION PAGES FUNCTIONALITY//
//grab divs to add over functionality
let imageP1=document.getElementById("pck1");
let imageP2=document.getElementById("pck2");
let imageP3=document.getElementById("pck3");
let imageDiv=document.getElementById("vacayI");

//added event listeners to all, swap to specific image when hover over, swap to defaul upon hover off
imageP1.addEventListener("mouseover", () => {
        imageDiv.style.backgroundImage='url("./pics/pck1.jfif")';
    }
)
imageP1.addEventListener("mouseout", () => {
        imageDiv.style.backgroundImage='url("./pics/vacationDefault.jfif")';
    }
)
imageP2.addEventListener("mouseover", () => {
        imageDiv.style.backgroundImage='url("./pics/pck2.jfif")';
    }
)
imageP2.addEventListener("mouseout", () => {
        imageDiv.style.backgroundImage='url("./pics/vacationDefault.jfif")';
    }
)
imageP3.addEventListener("mouseover", () => {
        imageDiv.style.backgroundImage='url("./pics/pck3.jfif")';
    }
)
imageP3.addEventListener("mouseout", () => {
        imageDiv.style.backgroundImage='url("./pics/vacationDefault.jfif")';
    }
)

//Flying Animation
//algorithm and method courtesy of Heather Tovey
//changes position, ensures to not go off screen, scales to window size
let walkForwards = true;
let stepSize=1;
let functionPlane = function() {
    let img = document.getElementById('flier');
    let currentLeft = parseInt(img.style.left);
    if (walkForwards && (currentLeft + 5 > (window.innerWidth-img.width))) {
        walkForwards = false;
        //flipping
        img.style.transform="scale(-1,1)";
    }
    if (!walkForwards && (currentLeft <= 0)) {
        walkForwards = true;
        //flipping back
        img.style.transform="scale(1,1)";            
    }
    //go right
    if (walkForwards) {
        img.style.left = (currentLeft + stepSize) + 'px';
    } 
    //go left
    else {
        img.style.left = (currentLeft - stepSize) + 'px';
    }    
}
setInterval(functionPlane, 5);

