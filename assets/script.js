$(document).ready(function() {

  $(".saveBtn").on('click', function () {

    console.log(localStorage);
    // NEED TO SET FROM LOCAL STORAGE AND GET FROM LOCAL SOTRAGE ASWELL.
    


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