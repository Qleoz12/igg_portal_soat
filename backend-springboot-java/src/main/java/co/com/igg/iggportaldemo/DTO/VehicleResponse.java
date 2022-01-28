package co.com.igg.iggportaldemo.DTO;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
@JsonIgnoreProperties(ignoreUnknown = true)
public class VehicleResponse{
    public Vehicle vehicle;
}

class Vehicle {
    public int id;
    public String brand;
    @JsonProperty("class")
    public String myclass;
    public String line;
    public String plate;
    public String model;
    public ArrayList<Policy> policies;
    public Owner owner;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getMyclass() {
		return myclass;
	}
	public void setMyclass(String myclass) {
		this.myclass = myclass;
	}
	public String getLine() {
		return line;
	}
	public void setLine(String line) {
		this.line = line;
	}
	public String getPlate() {
		return plate;
	}
	public void setPlate(String plate) {
		this.plate = plate;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public ArrayList<Policy> getPolicies() {
		return policies;
	}
	public void setPolicies(ArrayList<Policy> policies) {
		this.policies = policies;
	}
	public Owner getOwner() {
		return owner;
	}
	public void setOwner(Owner owner) {
		this.owner = owner;
	}
    
    
}

/* ObjectMapper om = new ObjectMapper();
Root root = om.readValue(myJsonString), Root.class); */
@JsonIgnoreProperties(ignoreUnknown = true)
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






