import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-mix',
  templateUrl: './create-mix.component.html',
  styleUrls: ['./create-mix.component.css']
})
export class CreateMixComponent implements OnInit {

  Products = ['mojombo','defunkt','pjhyett','wycats'];
  userData : any;
  userName : string[];

  constructor( private http:HttpClient) { }

  ngOnInit() {
  }

  Search(){
    let obs = this.http.get('https://api.github.com/users/' + this.userName);
    obs.subscribe( data => {
      this.userData = data as string[];
      console.log('Got requests',JSON.stringify(this.userData,null, 2))
    });
  }
}
