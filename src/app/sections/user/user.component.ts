import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Adds functionality for working with forms
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
    // Step 1: Build the form
    this.buildForm();
    // Step 2: Retrieve and subscribe to the user information for authenticated user
    this._authService.user$
      .pipe(
        filter((user) => !!user), // !! makes sure user is true
        take(1) // Snapshot - as soon as I get user value, only take one and the unsubscribe
      )
      .subscribe((user) => {
        // Step 3: Fill the form with any of the user values that are there in the autheticated user
        this.userForm.patchValue(user);
      });
  }

  // Builds the form using the Formgroup.group() method
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

  // Used on the onClick handler in the form to submit the values in the form to the database
  public async onSubmit(): Promise<void> {
    if (this.userForm.dirty && this.userForm.valid) {
      await this._userService.saveUser(this.userForm.getRawValue());
    }
  }
}
