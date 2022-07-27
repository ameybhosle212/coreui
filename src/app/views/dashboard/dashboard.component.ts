import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:any;
  constructor(private cookie:CookieService , private http:HttpClient){}
  ngOnInit(): void {
    this.http.get(`https://localhost:44323/api/app/app-user/${this.cookie.get("id")}`).subscribe(result =>{
      this.data = result;
    })

  }
  daaa(){
    console.log(this.data);
    
  }
}
