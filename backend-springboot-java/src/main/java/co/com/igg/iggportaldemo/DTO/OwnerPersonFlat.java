package co.com.igg.iggportaldemo.DTO;

import com.fasterxml.jackson.annotation.JsonRootName;

@JsonRootName(value = "owner")
public class OwnerPersonFlat {
    public String email;
    public String address;
    public String city_id;
    public String phone;
    public String business_name;
    public String id_number;
    public String id_document;
    

    
}
