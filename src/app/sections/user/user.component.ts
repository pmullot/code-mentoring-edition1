import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Venue } from '@core/models/venue.model';
import { AuthService } from '@shared/services/auth.service';
import { UsersService } from '@shared/services/users.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public userForm: FormGroup;

  constructor(protected _fb: FormBuilder, protected _authService: AuthService, protected _userService: UsersService) {
    this.buildForm();
    console.log('form is built')
    this._authService.user$
      .pipe(
        filter((user) => !!user),
        take(10)
      )
      .subscribe((user) => {
        this.userForm.patchValue(user); // This line for some reason doesn't get executed, resulting in empty fields in the user form, only solution is to reload 
        console.log('the subscribe thing ')
      });
  }

  protected buildForm(): void {
    this.userForm = this._fb.group({
      name: [null, Validators.required],
      email: [{ value: null, disabled: true }, Validators.required],
      photoURL: null,
      zipCode: null,
      city: null,
      country: null,
      address: null,
    });
  }

  public async onSubmit(): Promise<void> {
    if (this.userForm.valid) {
      await this._userService.saveUser(this.userForm.getRawValue());
      this.userForm.reset();
      // Here the user will get redirected to the "add new venue wizard"
    }
  }
}
