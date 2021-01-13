import { Component } from '@angular/core';
import { User } from '@core/models/user.model';
import { UsersService } from '@core/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public user$: Observable<User>;
  constructor(protected _userService: UsersService) {
    this.user$ = this._userService.getUserByEmail$('t@t.com');
  }
}
