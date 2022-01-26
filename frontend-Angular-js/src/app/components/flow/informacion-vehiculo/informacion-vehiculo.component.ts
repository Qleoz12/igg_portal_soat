import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { VehicleWrapper } from 'src/app/models/vehicle.model';
import { ConsultarDatosClienteService } from 'src/app/services/placa.service';

@Component({
  selector: 'app-informacion-vehiculo',
  templateUrl: './informacion-vehiculo.component.html',
  styleUrls: ['./informacion-vehiculo.component.scss']
})
export class InformacionVehiculoComponent implements OnInit {

  vehicleInfo : VehicleWrapper ;
  registrationForm;

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private _ConsultarDatosClienteService: ConsultarDatosClienteService) {
      
      this.vehicleInfo=this.router.getCurrentNavigation()?.extras?.state?.infoplate
      this.registrationForm= this.formBuilder.group({
        policy: [this.vehicleInfo?.vehicle.policies[0].id , [Validators.required]]
      })
     }

     
  ngOnInit(): void 
  {
    
  }

  get myForm() {
    return this.registrationForm.controls.policy;
  }

  onSubmit() {

    if(!this.registrationForm.valid) {
      console.log("error")
    } else {
      this._ConsultarDatosClienteService.complete_quotation(this.registrationForm.controls.policy.value)
      .subscribe(
        response => {
          // console.log(response)
          this.router.navigate(['primer-paso'],{ state: { infoplate: response } });
        },
        error => {
          console.log(error);
        });
    }
  }
}
