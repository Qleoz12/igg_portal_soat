package co.com.igg.iggportaldemo.rest;

import co.com.igg.iggportaldemo.DTO.Vehicle;
import co.com.igg.iggportaldemo.DTO.VehicleResponse;
import co.com.igg.iggportaldemo.service.ISoat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("quotation_api")
public class SoatController
{
    @Autowired
    ISoat _ISoat;
    @PostMapping("/vehicle")
    public ResponseEntity<?> getkey(@RequestBody Vehicle rq)
    {
        ResponseEntity res;
        try {
            Mono<VehicleResponse> response=_ISoat.getVehicle(rq);
            System.out.println(response.block());
            res=ResponseEntity.ok().body(response);
            return res;
        }
        catch (Exception e)
        {

        }
        res=  ResponseEntity.badRequest().body("");
        return res;
    }
}
