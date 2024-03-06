const FFEMALE_NAMES=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"

];
const MALE_NAMES=[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];
const DAYS_OF_THE_WEEK=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// calculate day of the week as an interger btween 0-6
function computeDayOfTheweek(){

    let month = getMonth();
    let day = getDay();
    let year = getYear();
    let century = parseInt (year.substring(0,2));
    year=parseInt(year);

    let dayOfTheWeek = Math.round (( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);

    return dayOfTheWeek;
    
}
function checkRadiobutton() { //check what button is selected and return it

    let gender = null;
    let ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        gender = ele[i].value;
    }
    return gender;
}
