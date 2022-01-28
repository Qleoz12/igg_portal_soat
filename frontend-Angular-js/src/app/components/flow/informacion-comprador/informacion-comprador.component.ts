import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleWrapper } from 'src/app/models/vehicle.model';
import { catalogoService } from 'src/app/services/catalogo.service';
import { ConsultarDatosClienteService } from 'src/app/services/placa.service';

@Component({
  selector: 'app-informacion-comprador',
  templateUrl: './informacion-comprador.component.html',
  styleUrls: ['./informacion-comprador.component.scss']
})
export class InformacionCompradorComponent implements OnInit {

  vehicleInfo : VehicleWrapper ;
  registrationForm;
  tiposDocumentos:Map<string, string> =new Map();
  check:boolean=false;

  constructor(private _catalogoService:catalogoService,
    private _ConsultarDatosClienteService: ConsultarDatosClienteService,
    private formBuilder: FormBuilder,
    private router: Router)
    { 
      this.vehicleInfo=this.router.getCurrentNavigation()?.extras?.state?.infoplate
      this.registrationForm= this.formBuilder.group({
        ownerDocumentType: ['', [Validators.required]],
        ownerDocumentNumber: ['', [Validators.required]],
        owner_email:[this.vehicleInfo.vehicle.owner.email, [Validators.required]],
        owner_phone:[this.vehicleInfo.vehicle.owner.phone, [Validators.required]],
        owner_city:[this.vehicleInfo.vehicle.owner.city, [Validators.required]],
        owner_person_business_name:[this.vehicleInfo.vehicle.owner.person.business_name, [Validators.required]],
        owner_address:[this.vehicleInfo.vehicle.owner.address, [Validators.required]],
        
      })
  }

  ngOnInit(): void {

    this.tiposDocumentos=this._catalogoService.recuperarDocumetoTipos();
  }


  loaddata(type:string,number:string){

    if(this.vehicleInfo.vehicle.owner.person.id_number.toLowerCase()===number.toLowerCase()
    && this.vehicleInfo.vehicle.owner.id_document.toLocaleLowerCase()===type.toLowerCase())
    {
      this.check=true
    }
  }
  
  checkdata(){
    this.loaddata(this.registrationForm.controls.ownerDocumentType.value,""+this.registrationForm.controls.ownerDocumentNumber.value)
  }
  onSubmit() {

    if(!this.registrationForm.valid) {
      console.log("error")
    } else {
      this._ConsultarDatosClienteService.owners(this.registrationForm.value)
      .subscribe(
        response => {
          // console.log(response)
          this.router.navigate(['tercer-paso'],{ state: { infoplate: this.vehicleInfo } });
        },
        error => {
          console.log(error);
        });
    }
  }
}
