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

        //no postal code format problems, then continue
        else{
            //allow submission effects here
        }
    }
)

//on submit, rather than send it, give a message that tells it was sent, and prevent default
let regFormid=document.getElementById("regFormId");
regFormid.addEventListener("submit", () => {
        let errorMes=document.getElementById("errorM");
        errorMes.innerHTML="Sent";
        event.preventDefault();
})

//random user fetch from the API
//fetch a user, then append data to the page, creating the needed elements, fills them before adding to holder div
fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data => {
    let randoPerson=document.getElementById("randomUser");
    let randomImage=document.createElement("img")
    let randoData=document.createElement("p");
    let happyMessage=document.createElement("p");
    happyMessage.innerHTML=". I would recommend the Agency 10/10 times";
    randoData.innerHTML=`Random Happy Customer: ${data.results[0].name.first}  `
    randomImage.src=data.results[0].picture.large;
    randoPerson.appendChild(randomImage);
    randoPerson.appendChild(randoData);
    randoPerson.appendChild(happyMessage);
})
