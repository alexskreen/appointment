$(document).ready(function(){
$("#appointmentForm").submit(function(){
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var description = $("textarea#description").val();
    var date = $("input#date").val();
    var hourSelection = $("select#hourSelection").val();
    var minSelection = $("select#minSelection").val();
    var AMPMSelection = $("select#AMPMSelection").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    // $(".description").text(description);
    $(".date").text(date);
    $(".hourSelection").text(hourSelection);
    $(".minSelection").text(minSelection);
    $(".2").text(AMPMSelection);



    $(".confirmation").show();


    console.log(firstName,lastName,description, date,hourSelection, minSelection, AMPMSelection)
    event.preventDefault();
})
});
