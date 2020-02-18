import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { BoutiqueComponent } from '../boutique/boutique.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient, private boutique: BoutiqueComponent) {
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      address: [''],
      postalcode: [''],
      city: ['']
    })
   }

  ngOnInit(): void {
    console.log(this.boutique.products);
  }

  submitForm() {
    // Sending the client to json.
    var formData: any = new FormData();
    var temp;
    var user;
    formData.append("firstname", this.form.get('firstname').value);
    formData.append("lastname", this.form.get('lastname').value);
    formData.append("address", this.form.get('address').value);
    formData.append("postalcode", this.form.get('postalcode').value);
    formData.append("city", this.form.get('city').value);
    this.http.post('http://dam.tokidev.fr/customers', formData).subscribe(
      (response) => {
        console.log(response);
        temp = response;
      },
      (error) => console.log(error)
    );

    // Getting the last element of json.
    /*return this.http.get('http://dam.tokidev.fr/customer?max=100&offset=100').subscribe(
      //this.user = data.local
    );*/
  }

}
