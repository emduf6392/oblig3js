$(function (){
    const id = window.location.search.substring(1);
    const url = "/getOne?"+id;
    $.get(url, function (ticket){
        $("#id").val(ticket.id);
        $("#movie").val(ticket.movie);
        $("#number").val(ticket.number);
        $("#firstName").val(ticket.firstName);
        $("#lastName").val(ticket.lastName);
        $("#phoneNb").val(ticket.phoneNb);
        $("#email").val(ticket.email);
    });
});

function changeTicket() {
    const ticket = {
        movie: $("#chosenMovie").val(),
        number: $("#number").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNb: $("#phoneNb").val(),
        email: $("#email").val()
    };

    $.post("/changeTicket", ticket, function () {
        window.location.href = "/index.html";
    });
}

