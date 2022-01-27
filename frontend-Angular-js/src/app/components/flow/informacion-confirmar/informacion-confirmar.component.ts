import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleWrapper } from 'src/app/models/vehicle.model';
import { ConsultarDatosClienteService } from 'src/app/services/placa.service';

@Component({
  selector: 'app-informacion-confirmar',
  templateUrl: './informacion-confirmar.component.html',
  styleUrls: ['./informacion-confirmar.component.scss']
})
export class InformacionConfirmarComponent implements OnInit {
  
  vehicleInfo : VehicleWrapper ;
  registrationForm;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private _ConsultarDatosClienteService: ConsultarDatosClienteService
  ) {
    this.registrationForm= this.formBuilder.group({
      
    })
   }

  ngOnInit(): void {
  }


  onSubmit() {}

}
