package co.com.igg.iggportaldemo.service.impl;


import co.com.igg.iggportaldemo.DTO.VehicleResponse;
import co.com.igg.iggportaldemo.DTO.VehicleRq;
import co.com.igg.iggportaldemo.service.ISoat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class SoatImpl implements ISoat {
    
	public static final int DELAY_MILLIS = 100;
    public static final int MAX_RETRY_ATTEMPTS = 3;
    
    @Autowired
    private WebClient webClient;
    
	@Override
    public Mono<VehicleResponse> getVehicle(VehicleRq rq) {
		
		
        return webClient.put().uri(uriBuilder ->
                         uriBuilder
                                 .path("/quotation_api")
                                 .path("/vehicle")
                        .build())
        		.bodyValue(rq)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .retrieve()
                .onStatus(httpStatus -> HttpStatus.NOT_FOUND.equals(httpStatus),
                        clientResponse -> Mono.empty())
                .bodyToMono(VehicleResponse.class);


    }
}
