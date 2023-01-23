$(document).ready(function() {
  
    // current time flag
    const currentTime = false;
  
    // get times from moment
    const now = moment().format('MMMM Do YYYY');
  
    // time formate
    let nowHour24 = moment().format('HH');
    

  // assign the value of "now" cost to the <p>currentDay</p>.
  
    let $dateHeading = $('#currentDay');
    $dateHeading.text(now);

  });

    // using font awesome icon https://fontawesome.com/license
    // change description here - none
    const saveIcon = "save-regular.svg"; 
  
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
  
    if (currentTime) { (storedPlans); }
  
    // If plans were retrieved from localStorage, update the plan array to it
    if (storedPlans !== null) {
      planTextArr = storedPlans;
    } else {
      // this should only occur on first time the app is loaded in the browser
    
    }