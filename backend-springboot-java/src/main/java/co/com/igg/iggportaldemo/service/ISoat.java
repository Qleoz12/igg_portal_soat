package co.com.igg.iggportaldemo.service;

import co.com.igg.iggportaldemo.DTO.Vehicle;
import co.com.igg.iggportaldemo.DTO.VehicleResponse;
import reactor.core.publisher.Mono;

public interface ISoat {

    public Mono<VehicleResponse> getVehicle(Vehicle rq);
}
