package com.example.oblig3js;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {
    private final List<Ticket> tickets = new ArrayList<>();

    @PostMapping("/saveTicket")
    public void saveTickets(Ticket inTicket){
        tickets.add(inTicket);
    }

    @GetMapping("/getMovie")
    public List<Movie> movies() {
        List<Movie> newMovie = new ArrayList<>();
        newMovie.add(new Movie("Back to Black"));
        newMovie.add(new Movie("One Life"));
        newMovie.add(new Movie("Ibelin"));
        return newMovie;
    }

    @GetMapping("/getTicket")
    public List<Ticket> ticket() {
        return tickets;
    }

    @GetMapping("/deleteTicket")
    public void deleteTicket(){
        tickets.clear();
    }
}
