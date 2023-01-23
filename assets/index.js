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