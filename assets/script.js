$( document ).ready(function() {

 
var timeDisplay = document.querySelector("#currentDay");

function displayTime(today) {
    var today = dayjs();
    console.log(today.format("dddd MMMM D"));
    $('#currentDay').text(today.format('dddd MMMM D'));

}

displayTime();

function backgroundColorSetter () {

  var currentHour = dayjs();
  var newHour = (parseInt(currentHour.format("H")));


  function colorRetrieve () {

    // var nine = $('#9');
    // var ten = $('#10');
    // var eleven = $('#11');
    // var twelve = $('#12');
    // var thirteen = $('#13');
    // var fourteen = $('#14');
    // var fifteen = $('#15');
    // var sixteen = $('#16');
    // var seventeen = $('#17');  

    $('.row').each(function () {
      var rowTime = parseInt($(this).attr('id'));
    

      console.log(newHour, rowTime);

      if(rowTime === newHour) {
        $(this).removeClass('past future');
      }  else if (rowTime > newHour) {
        $(this).removeClass('past present');
      }  else if (rowTime < newHour) {
        $(this).removeClass('present future');
      }

    });  
  }

  colorRetrieve();

  function plannerFunction () {

  }

  $(".saveBtn").on("click", plannerFunction);
}

backgroundColorSetter();

});  