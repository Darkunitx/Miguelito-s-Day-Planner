$(document).ready(function() {
  // the following 31 lines allow the user to getitem from localStorage.
  nineAmEl = $("#9MORNING");
  tenAmEl = $("#10MORNING");
  elevenAmEl = $("#11MORNING");
  twelveAmEl = $("#12MORNING");
  thirteenAmEl = $("#13MORNING");
  fourteenAmEl = $("#14MORNING");
  fifteenAmEl = $("#15MORNING");
  sixteenAmEl = $("#16MORNING");
  seventeenAmEl = $("#17MORNING");

  var nineAmData = localStorage.getItem("9AM");
  var tenAmData = localStorage.getItem("10AM");
  var elevenAmData = localStorage.getItem("11AM");
  var twelveAmData = localStorage.getItem("12PM");
  var thirteenAmData = localStorage.getItem("1PM");
  var fourteenAmData = localStorage.getItem("2PM");
  var fifteenAmData = localStorage.getItem("3PM");
  var sixteenAmData = localStorage.getItem("4PM");
  var seventeenAmData = localStorage.getItem("5PM");

  $('#9MORNING').val(nineAmData);
  $('#10MORNING').val(tenAmData);
  $('#11MORNING').val(elevenAmData);
  $('#12MORNING').val(twelveAmData);
  $('#13MORNING').val(thirteenAmData);
  $('#14MORNING').val(fourteenAmData);
  $('#15MORNING').val(fifteenAmData);
  $('#16MORNING').val(sixteenAmData);
  $('#17MORNING').val(seventeenAmData);



  $(".saveBtn").on('click', function () {
    // function that saves info when you save button
    
    var keyName = $(this).siblings(".text-center").text().trim();
    var keyValue = $(this).siblings(".description").val().trim();
    localStorage.setItem(keyName, keyValue);


  });
  

function displayTime(today) {
  // displays time
    var today = dayjs();
    console.log(today.format("dddd MMMM D"));
    $('#currentDay').text(today.format('dddd MMMM D'));

}

displayTime();

function backgroundColorSetter () {
  //changes the background color by removing classes when an if statement is true/false
  var currentHour = dayjs();
  var updatedHour = (parseInt(currentHour.format("H")));

  function colorRetrieve () {

    $('.row').each(function () {
      var rowTime = parseInt($(this).attr("id").split("hour")[1]);
    
      console.log(updatedHour, rowTime);

      if(rowTime === updatedHour) {
        $(this).removeClass('past future');
      }  else if (rowTime > updatedHour) {
        $(this).removeClass('past present');
      }  else if (rowTime < updatedHour) {
        $(this).removeClass('present future');
      }

    });  
  }

  colorRetrieve();

}

backgroundColorSetter();


});  