package co.com.igg.iggportaldemo.service.impl;

import co.com.igg.iggportaldemo.DTO.Vehicle;
import co.com.igg.iggportaldemo.DTO.VehicleResponse;
import co.com.igg.iggportaldemo.service.ISoat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class SoatImpl implements ISoat {
    @Override
    public Mono<VehicleResponse> getVehicle(Vehicle rq) {
        WebClient client = WebClient.create();
        client.head().header("intermediary-url", "tusoatexcelseguros.com.co");
        return client.put().uri(uriBuilder ->
                         uriBuilder.path("https://server.segurosmundial.com.co")
                                 .path("/quotation_api")
                                 .path("/vehicle")
                        .build())
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .retrieve()
                .onStatus(httpStatus -> HttpStatus.NOT_FOUND.equals(httpStatus),
                        clientResponse -> Mono.empty())
                .bodyToMono(VehicleResponse.class);


    }
}
