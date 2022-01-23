package co.com.igg.iggportaldemo.DTO;

public class Vehicle
{
    String email;
    String phone;
    String plate;

    public Vehicle(String email, String phone, String plate) {
        this.email = email;
        this.phone = phone;
        this.plate = plate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }
}
