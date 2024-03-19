import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  newUser: User = new User();
  toggle: boolean = false;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getUser();
    this.form.disable();
  }

  getUser(): void {
    this.service.getUser().subscribe({
      next: (user: User) => {
        this.user = user;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onEdit(): void {
    this.newUser = new User(this.form.value);
    this.toggle = true;
    this.form.enable();
  }

  onCancel(): void {
    this.toggle = false;
    this.form.patchValue(this.user);
    this.form.disable();
  }

  onOk(): void {
    let newUser: User = new User(this.form.value);
    newUser._id = this.user._id;
    this.service.updateUser(newUser).subscribe({
      next: (response: any) => {
        this.toggle = false;
        this.form.disable();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }
}
