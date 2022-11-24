$( document ).ready(function() {

 
var timeDisplay = document.querySelector("#currentDay");

function displayTime(today) {
    var today = dayjs();
    console.log(today.format("dddd MMMM D"));
    $('#currentDay').text(today.format('dddd MMMM D'));

}

displayTime();

function backgroundColorSetter () {

  function getCurrentHour(currentHour) {
    var currentHour = dayjs();
    console.log(currentHour.format("H"));
  }

  getCurrentHour();


  var nine = document.getElementById('hour-9').value=9;
  var ten = document.getElementById('hour-10').value=10;
  var eleven = document.getElementById('hour-11').value=11;
  var twelve = document.getElementById('hour-12').value=12;
  var thirteen = document.getElementById('hour-13').value=13;
  var fourteen = document.getElementById('hour-14').value=14;
  var fifteen = document.getElementById('hour-15').value=15;
  var sixteen = document.getElementById('hour-16').value=16;
  var seventeen = document.getElementById('hour-17').value=17;

  // console.log(document.getElementById('hour-9').value);
  // console.log(document.getElementById('hour-10').value);
  // console.log(document.getElementById('hour-11').value);
  // console.log(document.getElementById('hour-12').value);
  // console.log(document.getElementById('hour-13').value);
  // console.log(document.getElementById('hour-14').value);
  // console.log(document.getElementById('hour-15').value);
  // console.log(document.getElementById('hour-16').value);
  // console.log(document.getElementById('hour-17').value);

  

  

    
  }




  // .attr('class', 'past');
  // .attr('class', 'present');
  // .attr('class', 'future');

backgroundColorSetter();


function plannerFunction() {
    console.log($(this).parent().attr('id'));

    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  };

  $(".saveBtn").on("click", plannerFunction)
});  