$(function (){
    getMovie();
    getOneTicket();
});

function getMovie(){
    $.get("/getMovie",function(movies){
        formatMovies(movies);
    });
}
function formatMovies(movies){
    let out = "<select id='chosenMovie' required><option label='Velg film her'></option>"
    for (const movie of movies){
        out += "<option>"+movie.movie+"</option>"
    }
    out += "</select>"
    $("#movie").html(out);
}
function getOneTicket() {
    const id = window.location.search.substring(1);
    const url = "/getOne?" +id;
    $.get(url, function (oneTicket){
        $("#id").val(oneTicket.id);
        $("#chosenMovie").val(oneTicket.movie);
        $("#number").val(oneTicket.number);
        $("#firstName").val(oneTicket.firstName);
        $("#lastName").val(oneTicket.lastName);
        $("#phoneNb").val(oneTicket.phoneNb);
        $("#email").val(oneTicket.email);
    });
}

function changeTicket() {
    const ticket = {
        id : $("#id").val(),
        movie: $("#chosenMovie").val(),
        number: $("#number").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNb: $("#phoneNb").val(),
        email: $("#email").val()
    };

    $.post("/changeTicket", ticket, function () {
        window.location.href = "index.html";
    });
}

