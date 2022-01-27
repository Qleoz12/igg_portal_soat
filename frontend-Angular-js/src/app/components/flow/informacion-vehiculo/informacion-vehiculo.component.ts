import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Policy, VehicleWrapper } from 'src/app/models/vehicle.model';
import { ConsultarDatosClienteService } from 'src/app/services/placa.service';

@Component({
  selector: 'app-informacion-vehiculo',
  templateUrl: './informacion-vehiculo.component.html',
  styleUrls: ['./informacion-vehiculo.component.scss']
})
export class InformacionVehiculoComponent implements OnInit {

  vehicleInfo : VehicleWrapper ;
  policySelected: Policy | undefined ;
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



  onSubmit() {

    if(!this.registrationForm.valid) {
      console.log("error")
    } else {

      let policytoSend=undefined;
      var list: Policy[] = this.vehicleInfo.vehicle.policies;
      this.policySelected = list.filter( element => element.id === this.registrationForm.controls.policy.value)[0];
      this._ConsultarDatosClienteService.complete_quotation(this.policySelected)
      .subscribe(
        response => {
          // console.log(response)
          this.router.navigate(['segundo-paso'],{ state: { infoplate: this.vehicleInfo } });
        },
        error => {
          console.log(error);
        });
    }
  }
}
