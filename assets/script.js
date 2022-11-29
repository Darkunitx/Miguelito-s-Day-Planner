$(document).ready(function() {

  var storedData = JSON.parse(localStorage.getItem('noteData'));
  console.log(storedData);
  // display notedata

  $(".saveBtn").on('click', function (event) {
    
    var event = $(event.target);
    var note = event.prev().val();
    console.log(note);

    console.log(localStorage);
    var data = {"hour": 9, "noteText": "hello note here"}
    localStorage.setItem('noteData',JSON.stringify(data)
    )
    // stringify the line above

    // CAPTURE DATA
    // ASSIGN DATA TO VARIABLE
    //  NEED TO SET FROM LOCAL STORAGE AND GET FROM LOCAL SOTRAGE ASWELL.
    
    


  });
  


  

function displayTime(today) {
    var today = dayjs();
    console.log(today.format("dddd MMMM D"));
    $('#currentDay').text(today.format('dddd MMMM D'));

}

displayTime();

function backgroundColorSetter () {
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