let tickets = [];
$(function (){
    getTicket();
    getMovie();
})
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

function validation(){
    let errorCount = 0;
    let validphone = $("#phoneNb")[0].checkValidity();
    let validemail = $("#email")[0].checkValidity();
    let validnumber = $("#number")[0].checkValidity();
    let chosenMovie = $("#chosenMovie").val();
    let inNumber = $("#number").val();
    let inFirstname = $("#firstName").val();
    let inLastname = $("#lastName").val();
    let inPhonenb = $("#phoneNb").val();
    let inEmail = $("#email").val();

    if (chosenMovie === "" || chosenMovie === "Velg film her"){
        errorCount++
    }
    if (inNumber === 0 || inNumber ===""){
        $("#wrongNumber").text("Må skrive noe inn i antall");
        errorCount++
    }
    else {
        $("#wrongNumber").text("");
    }
    if (inFirstname === ""){
        $("#wrongFirstName").text("Må skrive noe inn i fornavnet");
        errorCount++
    }
    else {
        $("#wrongFirstName").text("");
    }
    if (inLastname === ""){
        $("#wrongLastName").text("Må skrive noe inn i etternavnet");
        errorCount++
    }
    else {
        $("#wrongLastName").text("");
    }
    if (inPhonenb === ""){
        $("#wrongPhone").text("Må skrive noe inn i telefonnr");
        errorCount++
    }
    else {
        $("#wrongPhone").text("");
    }
    if (inEmail === ""){
        $("#wrongEmail").text("Må skrive noe inn i eposten");
        errorCount++
    }
    else {
        $("#wrongEmail").text(   "");
    }
    if (!validphone||!validemail||!validnumber){
        errorCount++
    }
    return errorCount > 0;
}

function regTicket(){
    const ticket = {
        movie : $("#chosenMovie").val(),
        number : $("#number").val(),
        firstName : $("#firstName").val(),
        lastName : $("#lastName").val(),
        phoneNb : $("#phoneNb").val(),
        email : $("#email").val()
    };
    if (validation() === false){
        tickets.push(ticket);
        $.post("/saveTicket", ticket, function (){
            getTicket();
        })
        $("#chosenMovie").val("")
        $("#number").val("")
        $("#firstName").val("")
        $("#lastName").val("")
        $("#phoneNb").val("")
        $("#email").val("")
    }
}
function getTicket(){
    $.get("/getTicket", function(data){
        formatTicket(data);
    })
}
function formatTicket(tickets){
    let out = "<table class='table table-striped'><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>E-post</th><th></th><th></th></tr>"
    for (const ticket of tickets){
        out += "<tr><td>"+ticket.movie+"</td><td>"+ticket.number+"</td><td>"+ticket.firstName+"</td>" +
        "<td>"+ticket.lastName+"</td><td>"+ticket.phoneNb+"</td><td>"+ticket.email+"</td>" +
            "<td><a class='btn btn-primary' href='changes.html?id="+ticket.id+"'>Endre</a></td>"+
            "<td><button class='btn btn-danger' onclick='deleteOne("+ticket.id+")'>Slett</button></td></tr>"
    }
    out += "</table>"
    $("#allTickets").html(out);
}
function deleteOne(id) {
    const url = "/deleteOne?id="+id;
    $.get(url, function(){
        getTicket();
    })
}
function deleteTickets(){
    $.get("/deleteTicket", function (){
        getTicket();
    })
}