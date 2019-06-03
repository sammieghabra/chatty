$(document).ready(function() {

    $("#shitButton").click(function () {

        console.log('i came in u');
        let name = $('#name').val();
        console.log(name);
        console.log('returning');


        $('#name').val('val');


    });

    console.log('endd?');

});