import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UserGuard implements CanActivate{

	constructor(
		private _router: Router,
		private _userService: UserService	
	){}

	canActivate(){
		let identity = this._userService.getIdentity();

		if(identity && (identity.role == 'Trabajador' || identity.role == 'Cliente')){
			return true;
		}else{
			this._router.navigate(['/login']);
			return false;
		}
	}
}