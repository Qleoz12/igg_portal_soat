import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Placa } from 'src/app/models/placaRQ';
import { ConsultarDatosClienteService } from 'src/app/services/placa.service';

@Component({
  selector: 'app-cotizar-inicio',
  templateUrl: './cotizar-inicio.component.html',
  styleUrls: ['./cotizar-inicio.component.scss']
})
export class CotizarInicioComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private _ConsultarDatosClienteService: ConsultarDatosClienteService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      phone: ['', Validators.required],
      plate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    

    // stop here if form is invalid
    if (this.form.invalid) {
      this.validateAllFormFields(this.form)
        return;
    }

    let placa =new Placa(this.form.controls.email.value,this.form.controls.phone.value,this.form.controls.plate.value)
    this._ConsultarDatosClienteService.recuperarInformacionPlaca(placa)
    .subscribe(
      response => {
        // console.log(response)
        this.router.navigate(['primer-paso'],{ state: { infoplate: response } });
      },
      error => {
        console.log(error);
      }
    );
    

   
}

validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}

}
