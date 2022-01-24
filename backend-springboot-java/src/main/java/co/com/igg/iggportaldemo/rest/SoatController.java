package co.com.igg.iggportaldemo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.igg.iggportaldemo.DTO.VehicleRq;
import co.com.igg.iggportaldemo.service.ISoat;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("quotation_api")
public class SoatController
{
    @Autowired
    ISoat _ISoat;
    @PostMapping("/vehicle")
    public ResponseEntity<?> getkey(@RequestBody VehicleRq rq)
    {
        ResponseEntity res;
        try {
            Mono<?> response=_ISoat.getVehicle(rq);
            System.out.println(response.block());
            res=ResponseEntity.ok().body(response.block());
            return res;
        }
        catch (Exception e)
        {
        	System.out.println(e);
        }
        res=  ResponseEntity.badRequest().body("");
        return res;
    }
}
