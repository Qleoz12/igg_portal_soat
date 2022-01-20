import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotizar-inicio',
  templateUrl: './cotizar-inicio.component.html',
  styleUrls: ['./cotizar-inicio.component.scss']
})
export class CotizarInicioComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

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
    

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
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
