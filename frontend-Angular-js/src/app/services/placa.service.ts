import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Placa } from '../models/placaRQ';
import { Policy } from '../models/vehicle.model';

@Injectable({
    providedIn: 'root'
  })
export class ConsultarDatosClienteService {
    
  endpoint: string;

  constructor(private httpClient: HttpClient)
  {
    this.endpoint = environment.resources.host + environment.resources.context  ;
  }

  recuperarInformacionPlaca(consulta: Placa)
  {

    const headerVal = {
      'intermediary-url': ' tusoatexcelseguros.com.co',
    };

    const options = {
      headers: new HttpHeaders(headerVal)
    };


    return this.httpClient.put(this.endpoint + environment.resources.vehicle, consulta,options)
  }  


  complete_quotation(policyChoosed: Policy)
  {

    const headerVal = {
      'intermediary-url': ' tusoatexcelseguros.com.co',
    };

    const options = {
      headers: new HttpHeaders(headerVal)
    };


    return this.httpClient.get(this.endpoint + "/policies"+"/"+policyChoosed.id+environment.resources.complete_quotation, options)
  }
}