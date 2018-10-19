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

//GENERATING A CONTACT LIST FOR CONTACT US//
//create and run function that has a set array of names+numbers, then loops to append them to a holder div, then execute function 
let contactCreate=function(){
    arrNames=["Roberticus Bobeus", "Umbra Noctus", "John Doe", "Vachan Dhillon"];
    arrNums=["123-456", "999-9999", "911", "123-456-7890"];
    let contactHold=document.getElementById("listHold");
    for(let i=0;i<4;i++){
        let pContact=document.createElement("p");
        pContact.innerHTML=`${arrNames[i]}, number: ${arrNums[i]}`;
        contactHold.appendChild(pContact);
    }
}
contactCreate();

//