import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Placa } from '../models/placaRQ';
import { Policy } from '../models/vehicle.model';

@Injectable({
    providedIn: 'root'
  })
export class catalogoService {
    
  endpoint: string;

  constructor(private httpClient: HttpClient)
  {
    this.endpoint = environment.resources.host + environment.resources.context  ;
  }

  recuperarDocumetoTipos()
  {

    const typos = new Map<string, string>
     ([   
       ["CC","Cédula de Ciudadanía"],        
       ["CE","Cédula de Extranjería"],
       ["TI","Tarjeta "],
       ["NIT","NIT"],        
    //    ["NUIP","NUIP"],
    //    ["CD","Carné Diplomático"],
       ["PA","Pasaporte"],

     ]);

     
     return typos;
    }

}