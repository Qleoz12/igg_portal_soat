package co.com.igg.iggportaldemo.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.igg.iggportaldemo.DTO.VehicleRq;
import co.com.igg.iggportaldemo.config.WebClientConfiguration;
import co.com.igg.iggportaldemo.service.ISoat;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("quotation_api")
public class SoatController
{
	private static final Logger logger = LoggerFactory.getLogger(SoatController.class);
    @Autowired
    ISoat _ISoat;
    @PostMapping("/vehicle")
    public ResponseEntity<?> getkey(@RequestBody VehicleRq rq)
    {
        ResponseEntity res;
        try {
            Mono<?> response=_ISoat.getVehicle(rq);
            if(response.hasElement().block())
            {
            	res=ResponseEntity.ok().body(response.block());
            	return res;
            }
        }
        catch (Exception e)
        {
        	logger.error("Error /vehicle",e);
        }
        res=  ResponseEntity.badRequest().body("");
        return res;
    }
    
    
    //https://server.segurosmundial.com.co/quotation_api/cities
    @GetMapping("/cities")
    public ResponseEntity<?> getcities()
    {
        ResponseEntity res;
        try 
        {
            Mono<?> response=_ISoat.getCities();
            if(response.hasElement().block())
            {
            	res=ResponseEntity.ok().body(response.block());
            	return res;
            }
        }
        catch (Exception e)
        {
        	logger.error("Error /vehicle",e);
        }
        res=  ResponseEntity.badRequest().body("");
        return res;
    }
    
    @GetMapping("/policies/{policyCode}/complete_quotation")
    public ResponseEntity<?> completeQuotation(@PathVariable String policyCode)
    {
        ResponseEntity res;
        try 
        {
            Mono<?> response=_ISoat.completeQuotation(policyCode);
            if(response.hasElement().block())
            {
            	res=ResponseEntity.ok().body(response.block());
            	return res;
            }
        }
        catch (Exception e)
        {
        	logger.error("Error /vehicle",e);
        }
        res=  ResponseEntity.badRequest().body("");
        return res;
    }
}
