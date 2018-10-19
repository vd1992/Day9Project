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

//postal code format checking
let buttonSub=document.getElementById("subM");
buttonSub.addEventListener("click",() => {
    //get postal code value, generate regex expression and the error message holder
    let postal=document.myForm.postal.value;
    let tester=new RegExp(/\w{6}/);
    let errorMes=document.getElementById("errorM");
    errorMes.innerHTML="";

    //test, fails if length is not 6 or if regex fails, add error message and stop submit
    if(postal.length!=6 || !tester.test(postal)){
        console.log("bad")
        errorMes.innerHTML="Please format postal code properly, 6 alphanumeric characters only";
        event.preventDefault();
    }

    //no postal code format problems, then submit
    else{
        console.log(tester.test(postal));
        //event.preventDefault();
        //errorMes.innerHTML="Sent";
    }
})

//