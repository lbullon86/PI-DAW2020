import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppMaite';

  constructor(private auth:AuthService,
    private router:Router) { 
  }

/*   async ngOnInit() {
    if(await this.auth.checkSession()){
      this.router.navigate(['home'])

    }else{
      this.router.navigate(['login'])

    }

  } */

}
