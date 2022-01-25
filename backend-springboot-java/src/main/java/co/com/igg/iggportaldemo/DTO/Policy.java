package co.com.igg.iggportaldemo.DTO;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Policy{
	  public int id;
	    public int soat_code;
	    public String description;
	    public int amount;
	    public int amount_discount;
	    public int pje_descuento_ley;
	    public int imp_descuento_ley;
	    public String cod_causal;
	    public String descripcion_causal;
	    public Date valid_from;
	    public Date valid_until;
	    
}
