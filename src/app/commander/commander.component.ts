import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      address: [''],
      postalcode: [''],
      city: ['']
    })
   }

  ngOnInit(): void {
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("firstname", this.form.get('firstname').value);
    formData.append("lastname", this.form.get('lastname').value);
    formData.append("address", this.form.get('address').value);
    formData.append("postalcode", this.form.get('postalcode').value);
    formData.append("city", this.form.get('city').value);

    this.http.post('http://dam.tokidev.fr/customers', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    );
  }



}
