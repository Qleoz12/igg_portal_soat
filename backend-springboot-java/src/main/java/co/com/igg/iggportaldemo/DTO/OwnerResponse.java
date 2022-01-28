package co.com.igg.iggportaldemo.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public class OwnerResponse {
	
	public OwnerPersonFlat owner;
    
    
}
	