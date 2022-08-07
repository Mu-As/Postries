import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector:'ma-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})
export class RegisterComponent implements OnInit {
  form:FormGroup


  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void{
    //forma başlangıç değerleri ekleniyor.
    this.form = this.formBuilder.group({
      userName: ["", Validators.required],
      eMail: ["", Validators.required],
      password: ["", Validators.required]
  });
  }

  onSubmit():void {
  console.log("Values:",this.form.value);
  }
}
