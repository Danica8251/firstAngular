import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import Validation from 'src/app/shared/helpers/validation';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    passeord: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          username: [
            '',
            [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
            ]
          ],
          email: ['', [Validators.required, Validators.email]],
          password:[
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(40)
            ]
          ],
          confirmPassword: ['', Validators.required],
        }
        {
          Validators: [Validation.match('password', 'confirmPassword')]
        }
      )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const { username, email, password } = this.form.getRawValue();
    this.authService.register(username!, email!, password!).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        th
      }
    })




  }



}
