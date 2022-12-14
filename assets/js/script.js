// dayjs for date and time
dayjs(Date);
$("#currentDay").text(dayjs().format('dddd MMMM D, YYYY, h:mm a'));
// Current time
var currentTime = dayjs();
// Round off time to nearest hour
currentTime = currentTime.startOf("hour");
// 9AM as start of day
var beforeTime = dayjs().startOf('day').add(9, "hours");

// Timeblocks
    // 9AM
    var time1 = beforeTime.add(0, "h");
    time1 = time1.format('hh:mm A');
    $(".block1").text(time1);

    // 10AM
    var time2 = beforeTime.add(1, "h");
    time2 = time2.format('hh:mm A');
    $(".block2").text(time2);

    // 11AM
    var time3 = beforeTime.add(2, "h");
    time3 = time3.format('hh:mm A');
    $(".block3").text(time3);

    // 12PM
    var time4 = beforeTime.add(3, "h");
    time4 = time4.format('hh:mm A');
    $(".block4").text(time4);

    // 1PM
    var time5 = beforeTime.add(4, "h");
    time5 = time5.format('hh:mm A');
    $(".block5").text(time5);

    // 2PM
    var time6 = beforeTime.add(5, "h");
    time6 = time6.format('hh:mm A');
    $(".block6").text(time6);

    // 3PM
    var time7 = beforeTime.add(6, "h");
    time7 = time7.format('hh:mm A');
    $(".block7").text(time7);

    // 4PM
    var time8 = beforeTime.add(7, "h");
    time8 = time8.format('hh:mm A');
    $(".block8").text(time8);

    // 5PM
    var time9 = beforeTime.add(8, "h");
    time9 = time9.format('hh:mm A');
    $(".block9").text(time9);

// Function to compare actual time with timeblocks
function testTime (){
    // 9AM
    time1 = dayjs().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time1)){
        $(".form9").addClass("past");
    } else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    } else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };

    // 10AM
    time2 = dayjs().startOf('day').add(10, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time2)){
        $(".form10").addClass("past");
    } else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    } else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    };

    // 11AM
    time3 = dayjs().startOf('day').add(11, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time3)){
        $(".form11").addClass("past");
    } else if (currentTime.isBefore(time3)) {
        $(".form11").addClass("future");
    } else if (currentTime.isSame(time3)) {
        $(".form11").addClass("present");
    };

    // 12PM
    time4 = dayjs().startOf('day').add(12, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time4)){
        $(".form12").addClass("past");
    } else if (currentTime.isBefore(time4)) {
        $(".form12").addClass("future");
    } else if (currentTime.isSame(time4)) {
        $(".form12").addClass("present");
    };

    // 1PM
    time5 = dayjs().startOf('day').add(13, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time5)){
        $(".form1").addClass("past");
    } else if (currentTime.isBefore(time5)) {
        $(".form1").addClass("future");
    } else if (currentTime.isSame(time5)) {
        $(".form1").addClass("present");
    };

    // 2PM
    time6 = dayjs().startOf('day').add(14, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time6)){
        $(".form2").addClass("past");
    } else if (currentTime.isBefore(time6)) {
        $(".form2").addClass("future");
    } else if (currentTime.isSame(time6)) {
        $(".form2").addClass("present");
    };

    // 3PM
    time7 = dayjs().startOf('day').add(15, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time7)){
        $(".form3").addClass("past");
    } else if (currentTime.isBefore(time7)) {
        $(".form3").addClass("future");
    } else if (currentTime.isSame(time7)) {
        $(".form3").addClass("present");
    };

    // 4PM
    time8 = dayjs().startOf('day').add(16, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time8)){
        $(".form4").addClass("past");
    } else if (currentTime.isBefore(time8)) {
        $(".form4").addClass("future");
    } else if (currentTime.isSame(time8)) {
        $(".form4").addClass("present");
    };

    // 5PM
    time9 = dayjs().startOf('day').add(17, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time9)){
        $(".form5").addClass("past");
    } else if (currentTime.isBefore(time9)) {
        $(".form5").addClass("future");
    } else if (currentTime.isSame(time9)) {
        $(".form5").addClass("present");
    };
}
// Loop to getItem to local storage
testTime ();
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem (x[i]);
    $(".form") + x[i].valueOf(dataHour);
}

// Event listener to save input to local storage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings (".form-control").val();
    console.log ("It worked");
    var listItem = $(this).parent().data("hour");
});