import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleWrapper } from 'src/app/models/vehicle.model';
import { catalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-informacion-comprador',
  templateUrl: './informacion-comprador.component.html',
  styleUrls: ['./informacion-comprador.component.scss']
})
export class InformacionCompradorComponent implements OnInit {

  vehicleInfo : VehicleWrapper ;
  registrationForm;
  tiposDocumentos:Map<string, string> =new Map();

  constructor(private _catalogoService:catalogoService,
    private formBuilder: FormBuilder,
    private router: Router)
    { 
      this.vehicleInfo=this.router.getCurrentNavigation()?.extras?.state?.infoplate
      this.registrationForm= this.formBuilder.group({
        ownerDocumentType: ['', [Validators.required]],
        ownerDocumentNumber: ['', [Validators.required]]
      })
  }

  ngOnInit(): void {

    this.tiposDocumentos=this._catalogoService.recuperarDocumetoTipos();
  }


  loaddata(type:string,number:string){

    if(this.vehicleInfo.vehicle.owner.person.id_number.toLowerCase()===number.toLowerCase(),this.vehicleInfo.vehicle.owner.id_document.toLocaleLowerCase()===type.toLowerCase())
    {
      alert("cargar infor")
    }
  }
  
  checkdata(){
    this.loaddata(this.registrationForm.controls.ownerDocumentType.value,""+this.registrationForm.controls.ownerDocumentNumber.value)
  }
  onSubmit() {

    if(!this.registrationForm.valid) {
      console.log("error")
    } else {
      this.loaddata(this.registrationForm.controls.ownerDocumentType.value,""+this.registrationForm.controls.ownerDocumentNumber.value)
    }
  }
}
