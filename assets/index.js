$(document).ready(function () {

    // current time flag
    const currentTime = false;

    // get times from moment
    const now = moment().format('MMMM Do YYYY');

    // commented out for test in non-standard hours
    let nowHour24 = moment().format('HH');

    // assign the value of "now" cost to the <p>currentDay</p>.

    let $dateHeading = $('#currentDay');
    $dateHeading.text(now);

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
        planTextArr = new Array(9);

    }

    if (currentTime) { ("full array of planned text", planTextArr); }

    // set variable referencing planner element
    let $plannerDiv = $('#plannerContainer');
    // clear existing elements
    $plannerDiv.empty();

    // build calendar by row for fix set of hours
    for (let hour = 9; hour <= 17; hour++) {
        // index for array use offset from hour
        let index = hour - 9;


        // build row components
        let $rowDiv = $('<div>');
        $rowDiv.addClass('row');
        $rowDiv.addClass('plannerRow');
        $rowDiv.attr('hour-index', hour);
        // Start building Time box portion of row
        let $col2TimeDiv = $('<div>');
        $col2TimeDiv.addClass('col-md-2');
        // create timeBox element (contains time)
        const $timeBoxSpn = $('<span>');
        // can use this to get value
        $timeBoxSpn.attr('class', 'timeBox');
        // format hours for display
        let displayHour = "";
        let ampm = "";
        if (hour === 12) {
            displayHour = 12;
            ampm = "pm";
        } else
            if (hour > 12) {
                displayHour = hour - 12;
                ampm = "pm";
            } else {
                displayHour = hour;
                ampm = "am";
            }
        // populate timeBox with time
        $timeBoxSpn.text(`${displayHour} ${ampm}`);

        // insert into col inset into timebox
        $rowDiv.append($col2TimeDiv);
        $col2TimeDiv.append($timeBoxSpn);
        // STOP building Time box portion of row
        // START building input portion of row
        // build row components
        let $dailyPlanSpn = $('<input>');

        $dailyPlanSpn.attr('id', `input-${index}`);
        $dailyPlanSpn.attr('hour-index', index);
        $dailyPlanSpn.attr('type', 'text');
        $dailyPlanSpn.attr('class', 'dailyPlan');

        // access index from data array for hour 
        $dailyPlanSpn.val(planTextArr[index]);
        // create col to control width
        let $col9IptDiv = $('<div>');
        $col9IptDiv.addClass('col-md-9');
        // add col width and row component to row
        $rowDiv.append($col9IptDiv);
        $col9IptDiv.append($dailyPlanSpn);
        // STOP building Time box portion of row
        // START building save portion of row
        let $col1SaveDiv = $('<div>');
        $col1SaveDiv.addClass('col-md-1');

        let $saveBtn = $('<i>');
        $saveBtn.attr('id', `saveid-${index}`);
        $saveBtn.attr('save-id', index);
        $saveBtn.attr('class', "far fa-save saveIcon");
        // add col width and row component to row
        $rowDiv.append($col1SaveDiv);
        $col1SaveDiv.append($saveBtn);
        // STOP building save portion of row

        // set row color based on time
        updateRowColor($rowDiv, hour);

        // add row to planner container
        $plannerDiv.append($rowDiv);
    };
    // function to update row color
    function updateRowColor($hourRow, hour) {

        if (currentTime) { ("rowColor ", nowHour24, hour); }

        if (hour < nowHour24) {
            // $hourRow.css('')
            if (currentTime) { ("lessThan"); }
            $hourRow.css("background-color", "lightgrey")
        } else if (hour > nowHour24) {
            if (currentTime) { ("greaterthan"); }
            $hourRow.css("background-color", "lightgreen")
        } else {
            if (currentTime) { ("equal"); }
            $hourRow.css("background-color", "tomato")
        }
    };
    // saves to local storage
    // conclick function to listen for user clicks on plan area
    $(document).on('click', 'i', function (event) {
        event.preventDefault();

        if (currentTime) { ('click pta before ' + planTextArr); }

        let $index = $(this).attr('save-id');

        let inputId = '#input-' + $index;
        let $value = $(inputId).val();

        planTextArr[$index] = $value;


        if (currentTime) { ('value ', $value); }
        if (currentTime) { ('index ', $index); }
        if (currentTime) { ('click pta after ' + planTextArr); }

        // remove shawdow pulse class
        $(`#saveid-${$index}`).removeClass('shadowPulse');
        localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
    });
    // function to color save button on change of input
    $(document).on('change', 'input', function (event) {
        event.preventDefault();
        if (currentTime) { ('onChange'); }
        if (currentTime) { ('id', $(this).attr('hour-index')); }

        // neeed to check for save button

        let i = $(this).attr('hour-index');

        // add shawdow pulse class
        $(`#saveid-${i}`).addClass('shadowPulse');
    });

});