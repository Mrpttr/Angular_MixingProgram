import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deflection',
  templateUrl: './deflection.component.html',
  styleUrls: ['./deflection.component.css']
})
export class DeflectionComponent implements OnInit {

  userName : string[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/details.json').subscribe(
      data => {
        this.userName = data as string[];
      },
      (err: HttpErrorResponse)=> {
        console.log(err.message);
      }
    );

  }

}
