package co.com.igg.iggportaldemo.service;

import co.com.igg.iggportaldemo.DTO.VehicleRq;
import reactor.core.publisher.Mono;

public interface ISoat {

    public Mono<?> getVehicle(VehicleRq rq);
    
    public Mono<?> getCities();
    
    public Mono<?> completeQuotation(String policyCode);
    
}
