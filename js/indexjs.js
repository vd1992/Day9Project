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

//