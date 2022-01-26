import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VehicleWrapper } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-informacion-vehiculo',
  templateUrl: './informacion-vehiculo.component.html',
  styleUrls: ['./informacion-vehiculo.component.scss']
})
export class InformacionVehiculoComponent implements OnInit {

  vehicleInfo: VehicleWrapper;

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router) {

      this.vehicleInfo=this.router.getCurrentNavigation()?.extras?.state?.infoplate
     }

  ngOnInit(): void 
  {
    
  }

}
