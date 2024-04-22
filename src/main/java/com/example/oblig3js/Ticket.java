package com.example.oblig3js;

public class Ticket {
    private int id;
    private String movie;
    private int number;
    private String firstName;
    private String lastName;
    private String phoneNb;
    private String email;

    public Ticket(int id, String movie, int number, String firstName, String lastName, String phoneNb, String email) {
        this.id = id;
        this.movie = movie;
        this.number = number;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNb = phoneNb;
        this.email = email;
    }
    public Ticket(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNb() {
        return phoneNb;
    }

    public void setPhoneNb(String phoneNb) {
        this.phoneNb = phoneNb;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
