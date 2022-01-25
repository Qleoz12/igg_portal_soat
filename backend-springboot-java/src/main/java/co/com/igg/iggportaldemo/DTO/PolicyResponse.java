package co.com.igg.iggportaldemo.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PolicyResponse
{
    public Policy policy; 
}


