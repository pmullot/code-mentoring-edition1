import { Component } from '@angular/core';
import { User } from '@core/models/user.model';
import { AuthService } from '@shared/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent {
  public user$: Observable<User>;

  constructor(protected _authService: AuthService) {
    this.user$ = this._authService.user$;
  }

  public async signup(): Promise<boolean> {
    return await this._authService.loginUser();
  }

  public async signout(): Promise<void> {
    this._authService.logout();
  }
}
