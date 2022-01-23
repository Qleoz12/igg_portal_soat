package co.com.igg.iggportaldemo.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper; // version 2.11.1
import com.fasterxml.jackson.annotation.JsonProperty; // version 2.11.1

import java.util.ArrayList;
import java.util.Date;

public class VehicleResponse {
    public int id;
    public String brand;
    @JsonProperty("class")
    public String myclass;
    public String line;
    public String plate;
    public String model;
    public ArrayList<Policy> policies;
    public Owner owner;
}

/* ObjectMapper om = new ObjectMapper();
Root root = om.readValue(myJsonString), Root.class); */
class Policy{
    public int id;
    public int soat_code;
    public String description;
    public int amount;
    public int amount_discount;
    public Date valid_from;
    public Date valid_until;
    public int pje_descuento_ley;
    public int imp_descuento_ley;
    public String cod_causal;
    public String descripcion_causal;
}

class Person{
    public int id;
    public String business_name;
    public String id_number;
}

class Owner{
    public int id;
    public String email;
    public String address;
    public String id_document;
    public String phone;
    public int city;
    public Person person;
    public boolean editable;
}






